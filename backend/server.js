import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import connectDB from "./config/db.js"
import userRouter from "./routes/userRoutes.js"
import bookingsRouter from "./routes/bookingsRoutes.js"


dotenv.config()

const app = express()
// Middleware 
app.use(express.json())
app.use(cors())




// Routes 
app.get("/", (req, res) => {
    res.json({ success: true, message: "Api Working" }).status(200)
})

app.use("/api/user", userRouter)

app.use("/api/book", bookingsRouter)


// PORT Number

const PORT = process.env.PORT || 8000


// Start Server 

const startServer = async () => {
    try {
        // Connect To Db 
        await connectDB()
        app.listen((PORT), () => {
            console.log(`Server Working on PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }

}

startServer()