import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL)
        console.log('connected to db');
    } catch (error) {
        console.log(error);
    }
}

export default connectDB