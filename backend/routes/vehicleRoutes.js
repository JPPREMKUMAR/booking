

import express from "express"
import { addVehicle } from "../controllers/vehicleController.js"
import uploadImage from "../middlewares/uploadImage.js"
import authAdmin from "../middlewares/authAdmin.js"

const vehicleRouter = express.Router()

vehicleRouter.post("/addItem", authAdmin, uploadImage.single("image"), addVehicle)




export default vehicleRouter