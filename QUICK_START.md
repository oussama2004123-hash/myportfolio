# 🚀 Quick Start - Receive Messages in 5 Minutes

## Step-by-Step Visual Guide

### 📋 What Happens When Someone Contacts You:

```
┌─────────────┐
│   Visitor   │  Fills out contact form on your website
│   Website   │
└──────┬──────┘
       │
       │ POST /api/contact
       │ { name, email, message }
       ▼
┌─────────────┐
│   Backend   │  Validates data & prepares email
│   Server    │
└──────┬──────┘
       │
       │ Sends via Nodemailer
       ▼
┌─────────────┐
│    Gmail    │  Email service sends email
│   (SMTP)    │
└──────┬──────┘
       │
       │ Email delivered
       ▼
┌─────────────┐
│  Your Email │  ✉️ You receive the message!
│    Inbox    │
└─────────────┘
```

## ⚡ 5-Minute Setup

### 1️⃣ Get Gmail App Password (2 minutes)

1. Go to: https://myaccount.google.com/apppasswords
2. Select **"Mail"** → **"Other"** → Name it "Portfolio"
3. Click **Generate**
4. **Copy the 16-character password** (looks like: `abcd efgh ijkl mnop`)

### 2️⃣ Create .env File (1 minute)

Create a file named `.env` in your project folder:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
CONTACT_EMAIL=your-email@gmail.com
PORT=3000
```

**Replace:**
- `your-email@gmail.com` → Your actual Gmail address
- `abcd efgh ijkl mnop` → The App Password you just copied

### 3️⃣ Install & Run (2 minutes)

```bash
# Install dependencies (first time only)
npm install

# Start the server
npm start
```

You should see:
```
🚀 Server is running on http://localhost:3000
📧 Contact form endpoint: http://localhost:3000/api/contact
```

### 4️⃣ Test It!

1. Open: http://localhost:3000
2. Fill out the contact form
3. Submit
4. Check your email! 📧

## ✅ That's It!

Now when someone fills out your contact form, you'll receive an email like this:

```
Subject: New Contact Form Submission from John Doe

Name: John Doe
Email: john@example.com

Message:
Hello, I'm interested in working with you on a project...
```

## 🔍 How to Check If It's Working

### Check Server Console:
When someone submits the form, you'll see:
```
Email sent: <message-id-here>
```

### Check Your Email:
- Look in your **Inbox**
- Check **Spam/Junk** folder (sometimes first emails go there)
- The email will have subject: "New Contact Form Submission from [Name]"

## 🐛 Troubleshooting

### "Invalid login" error?
- ✅ Make sure you're using **App Password**, not your regular Gmail password
- ✅ Verify 2-Step Verification is enabled on your Google account

### No email received?
- ✅ Check spam folder
- ✅ Verify `CONTACT_EMAIL` in `.env` is correct
- ✅ Check server console for errors
- ✅ Make sure server is running (`npm start`)

### Server won't start?
- ✅ Run `npm install` first
- ✅ Check that `.env` file exists
- ✅ Make sure port 3000 is not already in use

## 📱 What You'll Receive

Every contact form submission sends you an email with:

- **From:** Your email (the one in `EMAIL_USER`)
- **Reply-To:** Visitor's email (so you can reply directly!)
- **Subject:** "New Contact Form Submission from [Visitor Name]"
- **Content:**
  - Visitor's name
  - Visitor's email address
  - Their message

You can click "Reply" to respond directly to the visitor! ✉️

## 🎯 Next Steps

Once it's working:
- Deploy to production (Heroku, Railway, Render, etc.)
- Set environment variables on your hosting platform
- Test the live form
- Start receiving messages! 🎉

---

**Need more details?** See `SETUP_GUIDE.md` for comprehensive instructions.
