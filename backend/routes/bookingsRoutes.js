


import express from "express"

import { bookingUser } from "../controllers/bookingsController.js"

const bookingsRouter = express.Router()



bookingsRouter.post("/booking", bookingUser)



export default bookingsRouter