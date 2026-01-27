# 🔧 Render Troubleshooting Guide

## Issue: Contact Form Stuck at "Sending..."

If your contact form is stuck at "Sending...", follow these steps:

---

## Step 1: Check Render Service Status

1. Go to your Render dashboard: https://dashboard.render.com
2. Click on your service
3. Check the status:
   - ✅ **Live** = Service is running
   - ⚠️ **Building** = Still deploying (wait a few minutes)
   - ❌ **Failed** = Deployment failed (check logs)

---

## Step 2: Check Render Logs

1. In your Render service, click **"Logs"** tab
2. Look for errors:
   - `EMAIL_USER not set` → Missing environment variable
   - `CONTACT_EMAIL not set` → Missing environment variable
   - `Invalid login` → Wrong App Password
   - `Port already in use` → Port configuration issue
   - `Cannot find module` → Missing dependencies

3. **Common log messages you should see:**
   ```
   ✅ Email configuration detected. Contact form is ready!
   🚀 Server is running on port 10000
   📧 Contact form endpoint: /api/contact
   ```

---

## Step 3: Verify Environment Variables

In Render → **Environment** tab, make sure you have:

| Variable | Value | Example |
|----------|-------|---------|
| `EMAIL_SERVICE` | `gmail` | `gmail` |
| `EMAIL_USER` | Your Gmail | `yourname@gmail.com` |
| `EMAIL_PASS` | App Password | `abcdefghijklmnop` (16 chars, no spaces) |
| `CONTACT_EMAIL` | Your email | `yourname@gmail.com` |
| `PORT` | `10000` | `10000` |
| `NODE_ENV` | `production` | `production` |

**Important:**
- ✅ App Password should have **NO SPACES**
- ✅ All variables must be set
- ✅ Check for typos

---

## Step 4: Test the API Endpoint

1. Get your Render URL: `https://your-app.onrender.com`
2. Test health endpoint:
   ```
   https://your-app.onrender.com/api/health
   ```
   Should return: `{"status":"ok","message":"Server is running"}`

3. If health check fails:
   - Service might be sleeping (free tier)
   - Wait 30 seconds and try again
   - Check if service is "Live" in dashboard

---

## Step 5: Check Browser Console

1. Open your portfolio on Render
2. Press `F12` to open Developer Tools
3. Go to **Console** tab
4. Submit the contact form
5. Look for errors:
   - `Failed to fetch` → Server not reachable
   - `CORS error` → CORS configuration issue
   - `Timeout` → Server taking too long
   - `Network error` → Connection issue

---

## Step 6: Test Contact Form Endpoint Directly

Use curl or Postman to test:

```bash
curl -X POST https://your-app.onrender.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "Test message"
  }'
```

**Expected response:**
```json
{
  "success": true,
  "message": "Thank you! Your message has been sent successfully.",
  "messageId": "..."
}
```

**If you get an error:**
- Check the error message
- Verify environment variables
- Check Render logs

---

## Step 7: Common Issues & Solutions

### Issue: "Request timeout"
**Solution:**
- Render free tier can be slow (30+ seconds first request)
- Wait and try again
- Consider upgrading to paid plan

### Issue: "Failed to fetch"
**Solution:**
- Service might be sleeping
- Check if service status is "Live"
- Wait 30 seconds and refresh

### Issue: "Invalid login" in logs
**Solution:**
- Regenerate Gmail App Password
- Update `EMAIL_PASS` in Render
- Make sure no spaces in password

### Issue: "CONTACT_EMAIL not set"
**Solution:**
- Add `CONTACT_EMAIL` environment variable
- Set it to your email address
- Redeploy service

### Issue: Service keeps restarting
**Solution:**
- Check logs for errors
- Verify all environment variables are set
- Check if PORT is set to 10000

---

## Step 8: Verify Email Configuration

1. **Test locally first:**
   ```bash
   npm test
   ```
   Should show: `✅ Email connection verified successfully!`

2. **If local test fails:**
   - Regenerate Gmail App Password
   - Update `.env` file
   - Test again

3. **If local test works but Render doesn't:**
   - Copy App Password from `.env` to Render
   - Make sure no spaces in Render environment variable
   - Redeploy service

---

## Step 9: Force Redeploy

If nothing works:

1. In Render dashboard → **Settings**
2. Scroll to **Manual Deploy**
3. Click **"Clear build cache & deploy"**
4. Wait for deployment to complete
5. Test again

---

## Step 10: Check Network Tab

1. Open Developer Tools → **Network** tab
2. Submit contact form
3. Look for `/api/contact` request:
   - **Status:** Should be `200` (success) or `400/500` (error)
   - **Time:** Should complete within 30 seconds
   - **Response:** Check the response body

**If request is pending:**
- Server might be sleeping
- Wait 30 seconds
- Check Render logs

---

## Quick Checklist

- [ ] Service status is "Live" in Render
- [ ] All environment variables are set
- [ ] App Password has no spaces
- [ ] Health endpoint works: `/api/health`
- [ ] No errors in Render logs
- [ ] No errors in browser console
- [ ] Service has been redeployed after changes

---

## Still Not Working?

1. **Check Render logs** for specific error messages
2. **Test health endpoint** to verify server is running
3. **Verify environment variables** are all set correctly
4. **Try redeploying** the service
5. **Check browser console** for client-side errors

**Contact form should work after these fixes!** 🎉
