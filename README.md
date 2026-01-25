# Portfolio Website - Full Stack

A modern, responsive portfolio website with a Node.js/Express backend for handling contact form submissions.

## Features

- 🎨 Modern, clean UI/UX design
- 📱 Fully responsive (mobile-first approach)
- 🌍 Multi-language support (English, Arabic, French) with RTL support
- ✨ Smooth animations and transitions
- 📧 Backend contact form with email functionality
- 🚀 Fast and optimized performance

## Tech Stack

### Frontend
- HTML5 (Semantic)
- CSS3 (Modern animations, responsive design)
- JavaScript (Vanilla ES6+)
- Google Fonts (Lilita One, Outfit)

### Backend
- Node.js
- Express.js
- Nodemailer (Email sending)
- CORS enabled

## 🚀 Quick Start - Receive Messages

**Want to receive contact form messages?** See **[QUICK_START.md](QUICK_START.md)** for a 5-minute setup guide!

### How It Works:
1. Visitor fills out contact form → 
2. Backend receives data → 
3. Email sent to your inbox → 
4. You receive the message! ✉️

## Installation

1. **Clone or download the project**
   ```bash
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   # Create .env file (copy from example)
   cp .env.example .env
   ```
   
   Then edit `.env` file with your email configuration:
   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CONTACT_EMAIL=your-contact-email@gmail.com
   PORT=3000
   ```

4. **For Gmail users (Recommended):**
   - Enable 2-Step Verification: https://myaccount.google.com/security
   - Generate App Password: https://myaccount.google.com/apppasswords
   - Select "Mail" → "Other" → Name it "Portfolio"
   - Copy the 16-character password
   - Use the App Password (NOT your regular password) in `.env`
   
   **📖 Detailed Setup:** See [SETUP_GUIDE.md](SETUP_GUIDE.md) for complete instructions

## Running the Application

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in `.env`)

## Project Structure

```
portfolio/
├── assets/
│   ├── css/
│   │   └── style.css          # Main stylesheet
│   ├── js/
│   │   └── script.js           # Frontend JavaScript
│   └── images/                # Image assets
├── index.html                 # Main HTML file
├── server.js                  # Express backend server
├── package.json               # Dependencies and scripts
├── .env.example              # Environment variables template
├── .gitignore                # Git ignore file
└── README.md                 # This file
```

## API Endpoints

### POST `/api/contact`
Submit contact form data.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in working with you."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you! Your message has been sent successfully.",
  "messageId": "email-message-id"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Email Configuration

### Option 1: Gmail
```env
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Option 2: Custom SMTP
```env
EMAIL_SERVICE=smtp
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-password
```

## Deployment

### Deploying to Platforms

1. **Heroku:**
   - Add `Procfile`: `web: node server.js`
   - Set environment variables in Heroku dashboard
   - Deploy: `git push heroku main`

2. **Vercel/Netlify:**
   - Configure build command: `npm install`
   - Set start command: `node server.js`
   - Add environment variables in platform settings

3. **Railway/Render:**
   - Connect your repository
   - Set environment variables
   - Deploy automatically

## Customization

- **Colors:** Edit CSS variables in `assets/css/style.css`
- **Content:** Update text in `index.html`
- **Languages:** Modify translations in `assets/js/script.js`
- **Email Template:** Customize email HTML in `server.js`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project for your portfolio!

## Contact

For questions or support, contact: oussamahitte6@gmail.com
