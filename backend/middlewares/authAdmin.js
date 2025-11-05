
import jwt from "jsonwebtoken"

const getPayload = (token) => {
    const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)

    return payload
}



const authAdmin = (req, res, next) => {

    try {

        const { token } = req.headers
        //console.log(token)
        const payload = getPayload(token)

        // console.log(payload)
        if (payload.adminEmail === process.env.ADMIN_EMAIL && payload.adminPassword === process.env.ADMIN_PASSWORD) {

            next()

        } else {
            return res.json({
                success: false,
                message: "Invalid Credientials"
            })

        }


    } catch (e) {
        console.log(e)
        res.json({ success: false, e })
    }
}



export default authAdmin