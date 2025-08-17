const express =require("express")
const router =express.Router()
const UserController=require("../../controllers/user-controller");


//user routes

router.post("/users",UserController.create);
router.delete("/users/:id",UserController.destroy)
router.get("/users/:id",UserController.getById)
module.exports=router;
