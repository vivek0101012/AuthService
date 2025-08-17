const express =require("express")
const router =express.Router()
const UserController=require("../../controllers/user-controller");
const {AuthRequestValidator}=require("../../middlewares/index")

//user routes

router.post("/signup",AuthRequestValidator.validateUserAuth,UserController.create);
router.delete("/users/:id",UserController.destroy)
router.get("/users/:id",UserController.getById),
router.get("/isAutheniticated ",UserController.isAuthenticated)
router.post("/signin",AuthRequestValidator.validateUserAuth,UserController.signIn)
module.exports=router;
