
import jwt from "jsonwebtoken"
import Bookings from "../models/Bookings.js"


const generateJWT = async (payload) => {

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY)
    return token
}






export const adminLogin = async (req, res) => {

    try {
        const { adminEmail, adminPassword } = req.body
        console.log(adminEmail, adminPassword)

        if (adminEmail === process.env.ADMIN_EMAIL && adminPassword === process.env.ADMIN_PASSWORD) {
            const payload = {
                adminEmail,
                adminPassword
            }
            const token = await generateJWT(payload)
            return res.json({ success: true, messsage: "Login Successful.", token: token })


        } else {
            return res.json({
                success: false,
                message: "Invalid Credientials"
            })
        }


    } catch (e) {

        console.log(e)
        return res.json({ e })
    }
}



export const adminAddItem = async (req, res) => {
    try {

        res.json({ success: true, message: "New Item Added." })


    } catch (e) {
        console.log(e)
        return res.json({ e })
    }

}

export const adminAllBookings = async (req, res) => {
    try {

        const allBookings = await Bookings.find({}).sort({ createdAt: -1 })

        res.json({ success: true, message: "All Bookings.", Bookings: allBookings })


    } catch (e) {
        console.log(e)
        return res.json({ e })
    }

}