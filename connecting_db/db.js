import mongoose from "mongoose"

export const connectDB = async () => {
    const URI = "mongodb+srv://divyayushv20:dv123@cluster0.teina.mongodb.net/test";
    try{
        await mongoose.connect(URI);
        console.log('Connected to DB Successfully!');
    }
    catch(error){
        console.log('Unable to connect due to error : ', error);
        process.exit(1);
    }
}