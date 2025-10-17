import mongoose from "mongoose";

let isConnected = false;

export const ConnectDB = async () => {
  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://shubhankarpatel2004_db_user:shubh1234@cluster0.fz7fnl7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ;
    
    await mongoose.connect(MONGO_URI);
    
    isConnected = true;
    console.log("Database Successfully Connected");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error;
  }
};