import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://partha:pass1234@cluster0.mfinh.mongodb.net/feast-express-database')
        .then(() => {
            console.log('DB Connected');
        });
    } catch (error) {
        console.error('DB Connection Error: ', error);
    }
};