import express from "express";
import { connectDB } from "./dbConnect.js";

const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Welcome!');
});

app.listen(port, () => {
    console.log(`Listening at port : ${port}`);
})

connectDB();