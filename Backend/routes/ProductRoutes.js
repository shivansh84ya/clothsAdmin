const ProductController=require("../Controller/ProductController")

const express=require("express")
const router=express.Router();

router.get("/",ProductController.stuSave);

router.post("/addproduct",ProductController.stuSave)

router.get("/productDisplay",ProductController.productDisplay )

module.exports=router;
