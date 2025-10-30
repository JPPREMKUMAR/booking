

import mongoose from "mongoose"


const BookingsSchema = mongoose.Schema({


    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    email: { type: String, required: true },
    bookingType: { type: String, required: true },
    vehicle: { type: String, required: true },
    pickUpLocation: { type: String, required: true },
    dropLocation: { type: String, required: true },
    bookingId: { type: String, required: true }
}, { timestamps: true })



const Bookings = mongoose.model("Bookings", BookingsSchema)


export default Bookings