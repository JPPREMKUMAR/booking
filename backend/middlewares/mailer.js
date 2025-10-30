
import nodemailer from 'nodemailer'







// Email Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }

})






const mailer = async (data) => {
    try {
        const { name, mobile, email } = data
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: email,
            subject: "New Registration",
            text: `Name: ${name} \n Email : ${email}  \n phone: ${mobile}`

        })

    } catch (error) {
        console.log(error)
        return error
    }
}



export default mailer