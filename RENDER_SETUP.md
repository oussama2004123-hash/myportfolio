# 🚀 Render Deployment Guide - Quick Setup

## Step-by-Step Render Deployment

### Prerequisites
1. GitHub account with your portfolio repository
2. Gmail account (or other email service)
3. Render account (free tier available)

---

## Part 1: Prepare Gmail App Password

1. **Enable 2-Step Verification** on your Google account:
   - Go to: https://myaccount.google.com/security
   - Enable "2-Step Verification"

2. **Generate App Password:**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" → "Other (Custom name)"
   - Name it: "Portfolio Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (you'll need this for Render)

---

## Part 2: Deploy to Render

### Step 1: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub (recommended) or email
3. Verify your email if needed

### Step 2: Create New Web Service
1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Click **"Connect account"** if not already connected to GitHub
4. Select your repository: **`oussama2004123-hash/myportfolio`**
5. Click **"Connect"**

### Step 3: Configure Service Settings
Fill in the following:

- **Name:** `portfolio` (or your preferred name)
- **Region:** Choose closest to you (e.g., `Oregon (US West)`)
- **Branch:** `main`
- **Root Directory:** Leave empty
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Plan:** `Free` (or choose paid for better performance)

### Step 4: Add Environment Variables
Click on **"Environment"** tab and add these variables:

| Key | Value | Example |
|-----|-------|---------|
| `EMAIL_SERVICE` | `gmail` | `gmail` |
| `EMAIL_USER` | Your Gmail address | `yourname@gmail.com` |
| `EMAIL_PASS` | Your App Password | `abcd efgh ijkl mnop` |
| `CONTACT_EMAIL` | Where to receive emails | `yourname@gmail.com` |
| `PORT` | `10000` | `10000` |
| `NODE_ENV` | `production` | `production` |

**Important Notes:**
- For `EMAIL_PASS`, use the **16-character App Password** (with or without spaces)
- `CONTACT_EMAIL` is where contact form messages will be sent
- `PORT` should be `10000` for Render (they set it automatically, but this is the default)

### Step 5: Deploy
1. Click **"Create Web Service"**
2. Wait for deployment (first time takes 2-3 minutes)
3. Watch the build logs - you should see:
   ```
   npm install
   npm start
   Server is running on http://localhost:10000
   ```

### Step 6: Get Your Live URL
Once deployed, you'll see:
- **Your live URL:** `https://portfolio.onrender.com` (or your custom name)
- **Status:** Should show "Live" in green

---

## Part 3: Test Your Contact Form

1. **Visit your live URL**
2. **Scroll to the contact form**
3. **Fill out and submit the form**
4. **Check your email inbox** (and spam folder)
5. **You should receive the contact form submission!**

---

## Troubleshooting

### Contact Form Not Working?

1. **Check Render Logs:**
   - Go to your service on Render
   - Click "Logs" tab
   - Look for error messages

2. **Verify Environment Variables:**
   - Go to "Environment" tab
   - Make sure all variables are set correctly
   - Check for typos in email addresses

3. **Test Email Configuration:**
   - Make sure you're using an **App Password**, not your regular Gmail password
   - Verify 2-Step Verification is enabled

4. **Check Email Service:**
   - Try the `/api/health` endpoint: `https://your-app.onrender.com/api/health`
   - Should return: `{"status":"ok","message":"Server is running"}`

### Common Errors:

**Error: "Invalid login"**
- Solution: Use App Password, not regular password

**Error: "CONTACT_EMAIL not set"**
- Solution: Add `CONTACT_EMAIL` environment variable

**Error: "Connection timeout"**
- Solution: Check Render logs, may need to restart service

### Render Free Tier Limitations:

- **Spins down after 15 minutes** of inactivity
- **First request after spin-down** takes ~30 seconds to wake up
- **512MB RAM** limit
- **100GB bandwidth** per month

For production use, consider upgrading to a paid plan.

---

## Updating Your Site

After making changes to your code:

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```

2. **Render will auto-deploy:**
   - Render detects the push
   - Automatically rebuilds and redeploys
   - Takes 1-2 minutes

---

## Custom Domain (Optional)

1. Go to your service on Render
2. Click "Settings"
3. Scroll to "Custom Domains"
4. Add your domain
5. Follow DNS configuration instructions

---

## Support

If you encounter issues:
1. Check Render logs
2. Check server logs in Render dashboard
3. Verify all environment variables are set
4. Test the `/api/health` endpoint

**Your portfolio is now live and ready to receive contact form submissions!** 🎉
