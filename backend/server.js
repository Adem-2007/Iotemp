import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Nodemailer Transporter (create it once for re-use)
const transporter = nodemailer.createTransport({
    service: 'Gmail', // Or your email service provider
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Existing Contact Form Endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please fill in all fields for the contact form.' });
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please enter a valid email address for the contact form.' });
    }

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER, // Use EMAIL_RECEIVER for contact form
        subject: `Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully (Contact Form)');
        res.status(200).json({ message: 'Contact form message sent successfully!' });
    } catch (error) {
        console.error('Error sending email (Contact Form):', error);
        res.status(500).json({ message: 'Oops! Something went wrong sending the contact form. Please try again later.', error: error });
    }
});

// New User Info Form Endpoint with Nodemailer
app.post('/api/user-info', async (req, res) => {
    const { firstName, lastName, email, number, address } = req.body;

    // Basic backend validation
    if (!firstName || !lastName || !email || !number || !address) {
        return res.status(400).json({ message: 'Please fill in all required fields for user information form.' });
    }

    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Please enter a valid email address for the user information form.' });
    }

    const userInfoMailOptions = {
        from: process.env.EMAIL_USER, // Use your email as sender for User Info (or set another one)
        to: process.env.USER_INFO_EMAIL_RECEIVER || process.env.EMAIL_RECEIVER, // Default to EMAIL_RECEIVER if USER_INFO_EMAIL_RECEIVER is not set
        subject: `New User Information Submitted: ${firstName} ${lastName}`,
        text: `
            User Information Details:

            First Name: ${firstName}
            Last Name: ${lastName}
            Email: ${email}
            Phone Number: ${number}
            Address: ${address}

            Submitted via User Info Form.
        `, // Customize email body as needed
        // html: `<h1>...</h1><p>...</p>` // You could use HTML for a richer email format
    };

    try {
        await transporter.sendMail(userInfoMailOptions);
        console.log('Email sent successfully (User Info Form)');
        res.status(200).json({ message: 'User information submitted successfully and email sent!' });
    } catch (error) {
        console.error('Error sending email (User Info Form):', error);
        res.status(500).json({ message: 'Oops! Something went wrong sending user information email. Please try again later.', error: error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});