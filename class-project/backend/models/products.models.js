import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    }
});

const ProductsModel = mongoose.model("ProductsModel", productsSchema);

ProductsModel.addProduct = async (product, successCallback, errorCallback) => {
    try{
        const dbRes = await ProductsModelModel.insertMany([product]);
        successCallback(dbRes);
    }
    catch(error){
        errorCallback(dbError);
    }
};