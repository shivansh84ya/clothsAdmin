const mongoose = require('mongoose');

const productImages  = new mongoose.Schema({
    ProductName:String,
    ProductTitle:String,
    productPrice:String,
    productImage:String
})

module.exports = mongoose.model("Product" , productImages)