import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body || {};

  if ([name, email, subject, message].some(value => typeof value !== 'string' || !value.trim()) || name.length > 120 || email.length > 254 || subject.length > 200 || message.length > 5000 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || /[\r\n]/.test(email + subject)) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD || !process.env.CONTACT_RECEIVER) {
    return res.status(503).json({ error: 'Email delivery is currently unavailable. Please email oussamahitte6@gmail.com directly.' });
  }
  const escapeHtml = (value: string) => value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]!));
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.CONTACT_RECEIVER,
    replyTo: email,
    subject: `[Portfolio] ${escapeHtml(subject)}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #f1f5f9; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #7c3aed, #06b6d4); padding: 28px 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 22px; color: white;">New Portfolio Message</h1>
        </div>
        <div style="padding: 28px 24px;">
          <div style="margin-bottom: 16px; padding: 14px; background: #1e293b; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="margin: 0 0 2px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">From</p>
            <p style="margin: 0; font-size: 15px; font-weight: 600;">${escapeHtml(name)}</p>
          </div>
          <div style="margin-bottom: 16px; padding: 14px; background: #1e293b; border-radius: 8px; border-left: 3px solid #06b6d4;">
            <p style="margin: 0 0 2px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Email</p>
            <p style="margin: 0; font-size: 15px;"><a href="mailto:${escapeHtml(email)}" style="color: #a78bfa; text-decoration: none;">${escapeHtml(email)}</a></p>
          </div>
          <div style="margin-bottom: 16px; padding: 14px; background: #1e293b; border-radius: 8px; border-left: 3px solid #7c3aed;">
            <p style="margin: 0 0 2px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
            <p style="margin: 0; font-size: 15px; font-weight: 600;">${escapeHtml(subject)}</p>
          </div>
          <div style="padding: 14px; background: #1e293b; border-radius: 8px; border-left: 3px solid #06b6d4;">
            <p style="margin: 0 0 2px; font-size: 11px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1px;">Message</p>
            <p style="margin: 0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        </div>
        <div style="padding: 14px 24px; background: #1e293b; text-align: center; font-size: 11px; color: #64748b;">
          Oussama Hitte's Portfolio
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ success: true, message: 'Email sent successfully!' });
  } catch (error: unknown) {
    const errMsg = error instanceof Error ? error.message : 'Unknown error';
    console.error('Email error:', errMsg);
    return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
}

