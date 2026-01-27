/**
 * Test script for contact form
 * Run this to test if the contact form is working
 * Usage: node test-contact.js
 */

require('dotenv').config();
const nodemailer = require('nodemailer');

// Test email configuration
async function testEmail() {
  console.log('🧪 Testing contact form email configuration...\n');
  
  // Check environment variables
  console.log('📋 Checking environment variables:');
  console.log('   EMAIL_SERVICE:', process.env.EMAIL_SERVICE || '❌ NOT SET');
  console.log('   EMAIL_USER:', process.env.EMAIL_USER || '❌ NOT SET');
  console.log('   EMAIL_PASS:', process.env.EMAIL_PASS ? '✅ SET' : '❌ NOT SET');
  console.log('   CONTACT_EMAIL:', process.env.CONTACT_EMAIL || '❌ NOT SET');
  console.log('');
  
  // Check if all required variables are set
  if (!process.env.EMAIL_SERVICE || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.CONTACT_EMAIL) {
    console.log('❌ ERROR: Missing required environment variables!');
    console.log('   Please set all required variables in your .env file or Render environment variables.');
    return;
  }
  
  // Create transporter
  let transporter;
  if (process.env.EMAIL_SERVICE === 'gmail') {
    // Remove spaces from App Password if present
    const appPassword = process.env.EMAIL_PASS ? process.env.EMAIL_PASS.replace(/\s+/g, '') : '';
    
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: appPassword
      }
    });
  } else if (process.env.EMAIL_SERVICE === 'smtp') {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  } else {
    console.log('❌ ERROR: Invalid EMAIL_SERVICE. Use "gmail" or "smtp"');
    return;
  }
  
  // Test connection
  console.log('🔌 Testing email connection...');
  try {
    await transporter.verify();
    console.log('✅ Email connection verified successfully!\n');
  } catch (error) {
    console.log('❌ Email connection failed!');
    console.log('   Error:', error.message);
    if (error.code === 'EAUTH') {
      console.log('   💡 Tip: Check your EMAIL_USER and EMAIL_PASS (use App Password for Gmail)');
    }
    return;
  }
  
  // Send test email
  console.log('📧 Sending test email...');
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL,
      subject: '🧪 Test Email from Portfolio Contact Form',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ff99;">✅ Contact Form Test</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> Test User</p>
            <p><strong>Email:</strong> test@example.com</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              This is a test message from your portfolio contact form. 
              If you received this email, your contact form is working correctly! 🎉
            </p>
          </div>
          <p style="color: #666; font-size: 12px;">This is a test email sent at ${new Date().toLocaleString()}</p>
        </div>
      `,
      text: `
        Contact Form Test
        
        Name: Test User
        Email: test@example.com
        
        Message:
        This is a test message from your portfolio contact form. 
        If you received this email, your contact form is working correctly! 🎉
      `
    });
    
    console.log('✅ Test email sent successfully!');
    console.log('   Message ID:', info.messageId);
    console.log('   Check your inbox at:', process.env.CONTACT_EMAIL);
    console.log('\n🎉 Contact form is ready to use!');
    
  } catch (error) {
    console.log('❌ Failed to send test email!');
    console.log('   Error:', error.message);
    if (error.code === 'EAUTH') {
      console.log('   💡 Tip: Make sure you\'re using an App Password for Gmail, not your regular password');
    }
  }
}

// Run test
testEmail().catch(console.error);
