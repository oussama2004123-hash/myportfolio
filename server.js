/**
 * Portfolio Backend Server
 * Handles contact form submissions and sends emails
 */

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Configure Nodemailer transporter
const createTransporter = () => {
  // If using Gmail, you need to use an App Password
  // For other services, adjust accordingly
  if (process.env.EMAIL_SERVICE === 'gmail') {
    // Remove spaces from App Password if present (Gmail App Passwords sometimes have spaces)
    const appPassword = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
    
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: appPassword // App Password for Gmail (spaces removed automatically)
      }
    });
  } else if (process.env.EMAIL_SERVICE === 'smtp') {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  } else {
    // Default: Use Ethereal Email for testing (doesn't require credentials)
    return nodemailer.createTransporter({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'ethereal.user@ethereal.email',
        pass: 'ethereal.pass'
      }
    });
  }
};

// Helper function to sanitize HTML input
function escapeHtml(text) {
  if (!text) return '';
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    let { name, email, message } = req.body;

    // Trim and validate
    if (name) name = name.trim();
    if (email) email = email.trim();
    if (message) message = message.trim();

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Length validation to prevent abuse
    if (name.length > 100) {
      return res.status(400).json({
        success: false,
        message: 'Name is too long (max 100 characters)'
      });
    }

    if (email.length > 255) {
      return res.status(400).json({
        success: false,
        message: 'Email is too long'
      });
    }

    if (message.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Message is too long (max 5000 characters)'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email address'
      });
    }

    // Check if CONTACT_EMAIL is configured
    if (!process.env.CONTACT_EMAIL) {
      console.error('CONTACT_EMAIL environment variable is not set');
      return res.status(500).json({
        success: false,
        message: 'Contact form is not properly configured. Please contact the administrator.'
      });
    }

    // Check if EMAIL_USER and EMAIL_PASS are configured
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('EMAIL_USER or EMAIL_PASS environment variable is not set');
      return res.status(500).json({
        success: false,
        message: 'Email service is not properly configured. Please contact the administrator.'
      });
    }

    // Create transporter
    const transporter = createTransporter();
    
    // Verify transporter connection
    try {
      await transporter.verify();
      console.log('✅ Email transporter verified successfully');
    } catch (error) {
      console.error('❌ Email transporter verification failed:', error);
      return res.status(500).json({
        success: false,
        message: 'Email service configuration error. Please try again later.'
      });
    }

    // Sanitize inputs for HTML email
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@portfolio.com',
      to: process.env.CONTACT_EMAIL,
      replyTo: email, // Use original email for reply-to (not sanitized)
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ff99;">New Contact Form Submission</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${safeName}</p>
            <p><strong>Email:</strong> ${safeEmail}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${safeMessage}</p>
          </div>
          <p style="color: #666; font-size: 12px;">This email was sent from your portfolio contact form.</p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.messageId);

    // Send success response
    res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
      messageId: info.messageId
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error messages for debugging
    let errorMessage = 'Failed to send message. Please try again later.';
    
    if (error.code === 'EAUTH') {
      errorMessage = 'Email authentication failed. Please check email credentials.';
    } else if (error.code === 'ECONNECTION') {
      errorMessage = 'Could not connect to email server. Please try again later.';
    } else if (error.responseCode === 535) {
      errorMessage = 'Email authentication failed. Please check your App Password.';
    }
    
    res.status(500).json({
      success: false,
      message: errorMessage,
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Serve index.html for all other routes (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📧 Contact form endpoint: /api/contact`);
  console.log(`💚 Health check endpoint: /api/health`);
  
  // Check environment variables
  if (!process.env.EMAIL_USER) {
    console.warn('⚠️  Warning: EMAIL_USER not set. Email functionality may not work.');
    console.warn('   Please configure environment variables on your hosting platform.');
  }
  
  if (!process.env.CONTACT_EMAIL) {
    console.warn('⚠️  Warning: CONTACT_EMAIL not set. Contact form will not work.');
    console.warn('   Please set CONTACT_EMAIL environment variable.');
  }
  
  if (process.env.EMAIL_USER && process.env.CONTACT_EMAIL) {
    console.log('✅ Email configuration detected. Contact form is ready!');
  }
});

// Error handling
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});
