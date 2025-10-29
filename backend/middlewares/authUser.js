import jwt from "jsonwebtoken"
import User from "../models/User.js"



const verifyJwtToken = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET_KEY)
}


const authUser = async (req, res, next) => {

    try {
        const { token } = req.headers
        //console.log(token)
        const payload = verifyJwtToken(token)
        //console.log(payload)
        const { email } = payload

        const isUser = await User.findOne({ email: email })
        if (isUser === null) {
            return (
                res.json({ success: false, message: "Invalid Credientials" })
            )
        } else {
            req.email = email
            next()
        }


    } catch (e) {

        console.log(e)
        return res.json({ error: e, success: false })
    }
}


export default authUser