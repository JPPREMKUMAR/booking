
import mongoose from "mongoose"

const vehicleSchema = new mongoose.Schema({

    vehicle: { type: String, required: true },
    bookingType: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    status: { type: Boolean, default: true },
    capacity: { type: Number, required: true }


}, { timestamps: true })




const Vehicles = mongoose.model("vehicles", vehicleSchema)



export default Vehicles