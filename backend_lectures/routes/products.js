import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/products", (req, res) => {
    console.log("response from router : ", res);
    console.log("The default response object is: ", res.statusCode);
    let fileData = fileSystem.readFileSync("./db.json", {encoding: "utf-8"});
  
    const products = JSON.parse(fileData)?.products;
    console.log("The products data is: ", products);
    if (products && products.length > 0) {
      res.send(products);
    } else {
      res.status(204);
      res.send();
    }
  });
  