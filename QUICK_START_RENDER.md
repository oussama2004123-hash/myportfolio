# ⚡ Quick Start - Render Deployment

## 🎯 3-Step Setup

### Step 1: Get Gmail App Password
1. Go to: https://myaccount.google.com/apppasswords
2. Enable 2-Step Verification first (if not already)
3. Generate App Password for "Mail"
4. Copy the 16-character password

### Step 2: Deploy to Render
1. Go to: https://render.com
2. Click "New +" → "Web Service"
3. Connect GitHub repo: `oussama2004123-hash/myportfolio`
4. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

### Step 3: Add Environment Variables
In Render → Environment tab, add:

```
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-char-app-password
CONTACT_EMAIL=your-email@gmail.com
PORT=10000
```

**That's it!** Your contact form will work after deployment.

---

## 📋 Full Guide
See `RENDER_SETUP.md` for detailed step-by-step instructions.

---

## ✅ Checklist
- [ ] Gmail App Password generated
- [ ] Render account created
- [ ] GitHub repo connected to Render
- [ ] Environment variables added
- [ ] Service deployed
- [ ] Contact form tested

---

**Need help?** Check the logs in Render dashboard if something doesn't work.
