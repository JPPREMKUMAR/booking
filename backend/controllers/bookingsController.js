import Bookings from "../models/Bookings.js"
import mailer from "../middlewares/mailer.js"



const generateBookingId = () => {
    const one = Math.ceil(Math.random() * 9)
    const two = Math.ceil(Math.random() * 9)
    const three = Math.ceil(Math.random() * 9)
    const four = Math.ceil(Math.random() * 9)
    const five = Math.ceil(Math.random() * 9)
    const six = Math.ceil(Math.random() * 9)
    console.log(one, two, three, four, five, six)
    const bookingId = `CAB-${one}${two}${three}${four}${five}${six}`

    return bookingId
}


export const bookingUser = async (req, res) => {

    try {

        const { name, email, mobile, bookingType, vehicle, pickUpLocation, dropLocation } = req.body

        const bookingId = await generateBookingId()


        const newBooking = new Bookings({
            name,
            mobile,
            email,
            bookingType,
            vehicle,
            pickUpLocation,
            dropLocation,
            bookingId
        })
        await newBooking.save()
        await mailer(newBooking)
        res.json({ success: true, message: "Booking Successful.", bookingDetails: newBooking })


    } catch (e) {

        console.log(e)
        return res.json({ error: e, success: false })
    }
}