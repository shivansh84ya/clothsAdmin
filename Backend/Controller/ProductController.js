const ProductModel = require("../Models/ProductModel")

const stuSave=(req,res)=>{
    const myData= new ProductModel(req.body);
    myData.save().then(()=>{console.log("data Saved")});
}
const productDisplay= async(req,res)=>{
    ProductModel.find().then((data)=>{
        res.json(data);
    })
}

module.exports={
    stuSave,
    productDisplay
}