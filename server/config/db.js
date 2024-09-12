import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        
        await mongoose.connect(mongoUri)
        .then(() => {
            console.log('DB Connected');
        });
    } catch (error) {
        console.error('DB Connection Error: ', error);
    }
};