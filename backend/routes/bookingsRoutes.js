


import express from "express"

import authUser from "../middlewares/authUser.js"
import { bookingUser } from "../controllers/bookingsController.js"

const bookingsRouter = express.Router()



bookingsRouter.post("/booking", authUser, bookingUser)



export default bookingsRouter