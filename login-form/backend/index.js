import express from "express";
import { connectDB } from "./dbConnect.js";
const port = 8080;

const app = express();

app.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});

connectDB();