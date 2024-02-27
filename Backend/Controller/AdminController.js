const AdminProductModel = require("../Models/AdminModel")

const AdminSave=(req,res)=>{
    const myData= new AdminProductModel(req.body);
    myData.save().then(()=>{console.log("data Saved")});
}
const AdminproductDisplay= async(req,res)=>{
    AdminProductModel.find().then((data)=>{
        res.json(data);
    })
}

module.exports={
    AdminSave,
    AdminproductDisplay
}