const { Model } = require("sequelize")
const UserService= require("../services/user-service")

const userService =new UserService()


const create = async (req,res)=>{
 
    try {
        const user = await userService.create({
            email:req.body.email,
            password:req.body.password

        })
        return res.status(201).json({
            data:user,
            message:"successfully create a user ",
            success:true,
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"something went wrong with the controller",
            data:{},
            success:false,
            err:error
        })
        
    }

}

const destroy = async (req,res)=>{
 
    try {
        await userService.destroy({
         userId:req.body.id

        })
        return res.status(201).json({
            data:true,
            message:"successfully deleted the  user ",
            success:true,
            err:{}
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"something went wrong with the controller",
            data:{},
            success:false,
            err:error
        })
        
    }

}


module.exports={
    create,
    destroy
}