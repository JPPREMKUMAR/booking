
import Vehicles from "../models/Vehicles.js"

export const addVehicle = async (req, res) => {


    try {
        const { vehicle, bookingType, price, capacity } = req.body

        console.log(req.file.path)
        const imageUrl = req.file.path
        if (!req.path) {
            return res.json({ success: false, message: "Please Upload a Image." })
        }

        const newVehicle = new Vehicles({
            vehicle,
            bookingType,
            price,
            capacity,
            imageUrl

        })
        await newVehicle.save()


        console.log(newVehicle)

        res.json({ success: true, message: "Vehicle Added.", newVehicle: newVehicle })


    } catch (e) {

        console.log(e)
        return res.json({ success: false, e })
    }
}