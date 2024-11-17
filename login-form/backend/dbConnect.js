import mongoose from "mongoose";

export const connectDB = async () => {
    const mongo_uri = "mongodb+srv://divyayushv20:dv123@cluster0.teina.mongodb.net/test";
    try{
        await mongoose.connect(mongo_uri);
        console.log("Connected to Database Successfully!");
    }
    catch(err){
        console.log("Connection failed due to error: ", err);
    }
}