import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Redis } from '@upstash/redis';
import { Ratelimit } from '@upstash/ratelimit';

const SYSTEM_PROMPT = `You are a professional AI assistant integrated inside a developer's portfolio website.

IDENTITY:
Act as a real freelance web developer assistant. Speak professionally, clearly, and concisely. Identify yourself as the portfolio AI assistant when asked.

MAIN PURPOSE:
Help visitors understand the developer's services, skills, and projects, and guide them toward collaboration or hiring.

SPECIALIZATION:
- Web Development
- Gaming websites and landing pages
- Business websites and company platforms
- E-commerce stores
- Admin panels and dashboards
- UI/UX improvement
- Mobile-first responsive design
- API integrations and AI tools
- Performance optimization

TECH STACK:
HTML, CSS, JavaScript, Node.js, modern frontend structure, optimization techniques.

STRICT BEHAVIOR RULES:
- Keep answers SHORT and focused to reduce token usage.
- Maximum 4–6 lines per reply unless user asks for details.
- If question is unrelated to web development, politely redirect to development topics.
- Do NOT invent skills or experiences.
- Prefer structured answers using bullet points.
- Encourage project discussion naturally without aggressive marketing.

TOKEN OPTIMIZATION:
- Avoid long explanations.
- Avoid storytelling or unnecessary text.
- Provide direct, practical answers.

GOAL:
Build trust, present services professionally, and assist visitors efficiently inside the portfolio.`;

function getClientIP(req: VercelRequest): string {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string') {
    return forwarded.split(',')[0]?.trim() || 'unknown';
  }
  if (Array.isArray(forwarded)) {
    return forwarded[0]?.split(',')[0]?.trim() || 'unknown';
  }
  return 'unknown';
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { messages } = req.body || {};

  if (!Array.isArray(messages) || messages.length > 20 || messages.some(m => !m || !['user', 'assistant'].includes(m.role) || typeof m.content !== 'string' || m.content.length > 2000)) {
    return res.status(400).json({ error: 'Messages array is required.' });
  }

  if (!process.env.DEEPSEEK_API_KEY || !process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    const question = String(messages.at(-1)?.content || '').toLowerCase();
    const reply = /project|work|built/.test(question)
      ? 'Explore Madilik.ma (e-commerce), ModXnet.com (gaming), and the Android Streaming App in the projects section.'
      : /skill|service|stack/.test(question)
      ? 'Oussama builds React and Next.js websites, Node.js APIs, Android apps, and AI integrations. See the toolkit section for details.'
      : 'To discuss your project, email oussamahitte6@gmail.com or connect on WhatsApp at +212 659 404 133.';
    return res.json({ reply });
  }

  try {
    const redis = new Redis({ url: process.env.UPSTASH_REDIS_REST_URL, token: process.env.UPSTASH_REDIS_REST_TOKEN });
    const ratelimit = new Ratelimit({ redis, limiter: Ratelimit.fixedWindow(3, '24 h'), prefix: 'portfolio-chat' });
    const { success } = await ratelimit.limit(getClientIP(req));
    if (!success) return res.status(429).json({ limited: true, reply: null });
    const response = await fetch('https://api.deepseek.com/chat/completions', {
      method: 'POST',
      signal: AbortSignal.timeout(15000),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'system', content: SYSTEM_PROMPT }, ...messages],
        temperature: 0.7,
        max_tokens: 150,
        stream: false,
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('DeepSeek API error:', response.status, errorData);
      return res.status(500).json({ error: 'AI service unavailable. Please try again.' });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

    return res.json({ reply });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Chat error:', errMsg);
    return res.status(500).json({ error: 'Failed to get AI response. Please try again.' });
  }
}

