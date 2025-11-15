
import mongoose from "mongoose";

let isConnected = false; // Global flag to reuse the connection

const connectDB = async () => {
    if (isConnected) {
        // Use existing connection
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
        });

        isConnected = db.connections[0].readyState === 1;

        console.log("MongoDB Connected");
    } catch (error) {
        console.error("MongoDB Connection Error:", error);
    }
};

export default connectDB;





























{/*

import mongoose from "mongoose"



const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database Connected Successfully.')

    } catch (error) {
        console.log(error)

    }
}


export default connectDB 



    
    
    
    */}


