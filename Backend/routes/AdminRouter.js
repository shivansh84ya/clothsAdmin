const AdminProductController=require("../Controller/AdminController")

const express=require("express")
const router=express.Router();

// router.get("/",AdminProductController.AdminSave);

router.post("/Adminaddproduct",AdminProductController.AdminSave)

router.get("/AdminproductDisplay",AdminProductController.AdminproductDisplay )

router.delete("/api/AdminProductModel/:id",AdminProductController.AdminproductDelete)

module.exports=router;
