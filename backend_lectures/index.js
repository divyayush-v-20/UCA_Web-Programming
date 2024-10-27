import express from "express";
import fileSystem from "fs";
import bodyParser from "body-parser";

const app = express();
const port = "8080";

//for middlewares -> app.use()
app.use(bodyParser.json());
// if we dont pass any path, it works for every path

app.get("/", (req, res) => {
  res.send("hello!!!");
});

app.get("/products", (req, res) => {
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

app.post("/products", (req, res) => {
    const product = req.body;
    console.log("the product to be created is: ", product);
    res.send("Post API success")
})

app.listen(port, () => {
  console.log("The server is starting on port: ", port);
});