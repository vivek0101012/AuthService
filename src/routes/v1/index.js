const express =require("express")
const router =express.Router()
const UserController=require("../../controllers/user-controller");


//user routes

router.post("/signup",UserController.create);
router.delete("/users/:id",UserController.destroy)
router.get("/users/:id",UserController.getById),
router.post("/signin",UserController.signIn)
module.exports=router;
