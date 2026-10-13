# Oussama Hitte — Portfolio

Responsive React + TypeScript portfolio with a charcoal and lime design, project showcases, résumé, contact form, and optional AI assistant.

## Local development

```sh
npm ci --prefix frontend
npm run dev --prefix frontend
```

The Vite server previews the website. For local API calls, use `vercel dev` from the repository root or run the existing Express backend with a suitable Vite proxy.

## Deploy to Vercel

Import `oussama2004123-hash/myportfolio` in Vercel. Leave **Root Directory** at the repository root (`.`). The root `vercel.json` installs the locked frontend dependencies, builds the Vite app, and serves `frontend/dist`. Root `api/` entry points expose the contact and chat functions. You can alternatively set Root Directory to `frontend`, which includes the same API handlers and its own configuration.

Use Node.js 24.x. Set these server-side environment variables in Vercel:

- `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_RECEIVER`: Gmail SMTP credentials and destination for the contact form. Use a Google app password, not your account password.
- `DEEPSEEK_API_KEY`: optional AI responses.
- `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`: required with DeepSeek for persistent per-IP rate limiting.

Without AI credentials, the assistant uses a basic portfolio FAQ. Without email credentials, the form explains that email delivery is unavailable; the direct email and WhatsApp links still work. No secrets belong in Git or in variables prefixed with `VITE_`.

## Verify production build

```sh
npm run build --prefix frontend
npm run preview --prefix frontend
```

Project artwork is an illustrative interface concept, not a screenshot of the linked production sites.
