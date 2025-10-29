import express from "express"
import { loginUser, registerUser, userProfile } from "../controllers/userController.js"
import authUser from "../middlewares/authUser.js"

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post('/userProfile', authUser, userProfile)


export default userRouter