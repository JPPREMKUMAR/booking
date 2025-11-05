

import express from "express"
import { addVehicle, allVehicles, getVehicle, updateVehicle } from "../controllers/vehicleController.js"
import uploadImage from "../middlewares/uploadImage.js"
import authAdmin from "../middlewares/authAdmin.js"



const vehicleRouter = express.Router()

vehicleRouter.post("/addItem", authAdmin, uploadImage.single("image"), addVehicle)

vehicleRouter.post("/allVehicles", authAdmin, allVehicles)

vehicleRouter.post("/getVehicle/:id", authAdmin, getVehicle)

vehicleRouter.post("/update/:id", authAdmin, updateVehicle)


export default vehicleRouter