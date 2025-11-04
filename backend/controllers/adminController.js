




export const adminLogin = (req, res) => {

    try {
        const { adminEmail, adminPassword } = req.body
        console.log(adminEmail, adminPassword)


    } catch (e) {

        console.log(e)
        return res.json({ e })
    }
}