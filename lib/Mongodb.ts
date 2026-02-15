import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase  = async (): Promise<void> => {
    
    if(isConnected){
        console.log("Already connected to database");
        return;
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI!);
        isConnected = db.connections[0].readyState === 1;
        console.log("Connected to database");
    }

    catch (error) {
        console.error("Error connecting to database", error);
        process.exit(1);
    }
};