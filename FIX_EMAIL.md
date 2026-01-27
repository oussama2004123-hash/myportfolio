# 🔧 Fix Email Configuration

## Issue: Email Authentication Failed

The test shows: `Invalid login: 535-5.7.8 Username and Password not accepted`

This means your Gmail App Password is incorrect or needs to be regenerated.

## ✅ Solution: Regenerate Gmail App Password

### Step 1: Generate New App Password

1. **Go to:** https://myaccount.google.com/apppasswords
2. **Make sure 2-Step Verification is enabled:**
   - If not, go to: https://myaccount.google.com/security
   - Enable "2-Step Verification" first
3. **Generate App Password:**
   - Select "Mail" → "Other (Custom name)"
   - Name it: "Portfolio Contact Form"
   - Click "Generate"
   - **Copy the 16-character password** (it looks like: `abcd efgh ijkl mnop`)

### Step 2: Update .env File

Open your `.env` file and update:

```env
EMAIL_SERVICE=gmail
EMAIL_USER=oussamahitte6@gmail.com
EMAIL_PASS=your-new-16-character-app-password-here
CONTACT_EMAIL=oussamahitte6@gmail.com
```

**Important:**
- Remove spaces from the App Password OR keep them (the code handles both)
- Use the 16-character App Password, NOT your regular Gmail password
- Make sure there are no extra spaces or quotes

### Step 3: Test Again

Run the test script:
```bash
npm test
```

Or:
```bash
node test-contact.js
```

You should see:
```
✅ Email connection verified successfully!
✅ Test email sent successfully!
```

### Step 4: Test Contact Form

1. Start the server:
   ```bash
   npm start
   ```

2. Open: http://localhost:3000

3. Fill out the contact form and submit

4. Check your email inbox (oussamahitte6@gmail.com)

## For Render Deployment

When deploying to Render, add these environment variables:

- `EMAIL_SERVICE` = `gmail`
- `EMAIL_USER` = `oussamahitte6@gmail.com`
- `EMAIL_PASS` = `your-16-character-app-password` (no spaces)
- `CONTACT_EMAIL` = `oussamahitte6@gmail.com`
- `PORT` = `10000`

## Common Issues

### "Invalid login" Error
- **Solution:** Regenerate App Password and make sure 2-Step Verification is enabled

### "App Password not working"
- **Solution:** Make sure you're using App Password, not regular password
- Remove spaces from the password in .env file

### "Email not received"
- Check spam folder
- Verify CONTACT_EMAIL is set correctly
- Check Render logs for errors

## Need Help?

1. Verify 2-Step Verification is enabled
2. Generate a fresh App Password
3. Update .env file with the new password
4. Test again with `npm test`
