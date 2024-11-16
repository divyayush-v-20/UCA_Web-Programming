import mongoose from "mongoose";

export async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://divyayushv20:dv123@cluster0.53e7e.mongodb.net/test");
        console.log("Connected Successfully!");
    }
    catch(error){
        console.log('failed with error: ', error);
    }
}