import express from "express";
import {connectDB} from "./db.js";

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});

connectDB();