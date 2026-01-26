# 🚀 Deployment Guide - Contact Form Setup

## Quick Setup for Contact Form to Work on GitHub/Production

### Step 1: Choose a Hosting Platform

Your portfolio needs a **backend server** to handle contact form submissions. GitHub Pages only serves static files, so you need a platform that supports Node.js:

**Recommended Platforms:**
- **Railway** (Free tier available) - https://railway.app
- **Render** (Free tier available) - https://render.com
- **Heroku** (Paid, but reliable)
- **Vercel** (Free tier) - https://vercel.com
- **Netlify** (Free tier with serverless functions)

### Step 2: Deploy Your Portfolio

1. **Connect your GitHub repository** to your chosen platform
2. The platform will automatically detect `package.json` and `Procfile`
3. Set the **start command** to: `node server.js`
4. Set the **build command** to: `npm install` (or leave empty)

### Step 3: Configure Email Settings

**IMPORTANT:** You need to set environment variables on your hosting platform.

#### For Gmail (Recommended):

1. **Enable 2-Step Verification** on your Google account
2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" → "Other" → Name it "Portfolio"
   - Copy the 16-character password

3. **Set Environment Variables** on your hosting platform:
   ```
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=xxxx xxxx xxxx xxxx
   CONTACT_EMAIL=your-email@gmail.com
   PORT=3000
   ```

#### For Other Email Services:

```
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password
CONTACT_EMAIL=your-email@example.com
PORT=3000
```

### Step 4: Update Frontend API URL (If Needed)

The contact form automatically uses `window.location.origin`, so it will work automatically when deployed to the same domain as your backend.

**If your frontend and backend are on different domains:**
- Update `API_URL` in `assets/js/script.js` line 454
- Change to: `const API_URL = 'https://your-backend-url.com';`

### Step 5: Test the Contact Form

1. Visit your deployed portfolio
2. Fill out the contact form
3. Submit and check your email inbox
4. Check spam folder if email doesn't arrive

## Platform-Specific Instructions

### Railway

1. Sign up at https://railway.app
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Go to "Variables" tab
5. Add all environment variables (EMAIL_SERVICE, EMAIL_USER, etc.)
6. Railway automatically detects `Procfile` and starts the server
7. Your app will be live at: `https://your-app.railway.app`

### Render (Recommended - Easiest Setup)

1. **Sign up** at https://render.com (free tier available)
2. **Click "New" → "Web Service"**
3. **Connect your GitHub repository:**
   - Select your repository: `oussama2004123-hash/myportfolio`
   - Render will auto-detect Node.js
4. **Configure settings:**
   - **Name:** `portfolio` (or any name you prefer)
   - **Region:** Choose closest to you
   - **Branch:** `main`
   - **Root Directory:** Leave empty (or `/` if needed)
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start` (or `node server.js`)
   - **Plan:** Free (or choose paid for better performance)
5. **Add Environment Variables:**
   - Go to "Environment" tab
   - Click "Add Environment Variable" for each:
     ```
     EMAIL_SERVICE=gmail
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-app-password-here
     CONTACT_EMAIL=your-email@gmail.com
     PORT=10000
     ```
   - **Important:** For Gmail, use an App Password (not your regular password)
6. **Click "Create Web Service"**
7. **Wait for deployment** (first deploy takes 2-3 minutes)
8. **Your app will be live at:** `https://portfolio.onrender.com` (or your custom name)

**Note:** Render's free tier spins down after 15 minutes of inactivity. First request after spin-down takes ~30 seconds to wake up.

### Vercel

1. Sign up at https://vercel.com
2. Import your GitHub repository
3. Vercel will auto-detect Node.js
4. Go to "Settings" → "Environment Variables"
5. Add all environment variables
6. Deploy
7. Your app will be live at: `https://your-app.vercel.app`

### Netlify

1. Sign up at https://netlify.com
2. Add new site from Git
3. Select your repository
4. Build settings:
   - **Build command:** `npm install`
   - **Publish directory:** Leave empty (or `/` if needed)
5. Go to "Site settings" → "Environment variables"
6. Add all environment variables
7. Deploy
8. Your app will be live at: `https://your-app.netlify.app`

## Troubleshooting

### Contact Form Not Working?

1. **Check server logs** on your hosting platform
2. **Verify environment variables** are set correctly
3. **Test the API endpoint** directly:
   ```bash
   curl -X POST https://your-app.com/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

### Emails Not Arriving?

1. Check **spam/junk folder**
2. Verify **App Password** is correct (for Gmail)
3. Check **server logs** for error messages
4. Test with a different email address

### CORS Errors?

- The server already has CORS enabled
- If you still see CORS errors, make sure frontend and backend are on the same domain, or update CORS settings in `server.js`

## Security Notes

✅ **DO:**
- Use App Passwords (not regular passwords)
- Keep `.env` file local only (never commit to Git)
- Use environment variables on hosting platform
- Test the form before going live

❌ **DON'T:**
- Commit `.env` file to GitHub
- Share your App Password
- Use regular Gmail password
- Skip email validation

## Next Steps

Once deployed:
1. Test the contact form thoroughly
2. Monitor server logs for any errors
3. Set up email notifications for form submissions
4. Consider adding rate limiting to prevent spam
5. Add reCAPTCHA for additional security (optional)

---

**Need Help?** Check the `QUICK_START.md` file for detailed email setup instructions.
