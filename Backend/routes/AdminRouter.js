const AdminProductController=require("../Controller/AdminController")

const express=require("express")
const router=express.Router();

// router.get("/",AdminProductController.AdminSave);

router.post("/Adminaddproduct",AdminProductController.AdminSave)

router.get("/AdminproductDisplay",AdminProductController.AdminproductDisplay )

module.exports=router;
