




const authAdmin = (req, res, next) => {

    try {

        const { token } = req.headers
        console.log(token)


        next()
    } catch (e) {
        console.log(e)
        res.json({ success: false, e })
    }
}



export default authAdmin