import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async () => {
    try {
        const data = await resend.emails.send({
            from: 'Your Name <onboarding@resend.dev>',
            to: 'rolex515134@gmail.com',
            subject: 'Test Email',
            html: '<p>Hello, this is a test email!</p>',
        });
        console.log('Email sent:', data);
    } catch (error) {
        console.error(error);
    }
};

export default sendEmail