const { Model } = require("sequelize")
const UserService= require("../services/user-service")
const httpStatusCodes=require("http-status-codes")
const userService =new UserService()


const create = async (req,res)=>{
 
    try {
        const user = await userService.create({
            email:req.body.email,
            password:req.body.password

        })
        return res.status(httpStatusCodes.CREATED).json({
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

const getById = async (req,res)=>{
 
    try {
       const user= await userService.getById(
        req.params.id

        )
        return res.status(httpStatusCodes.OK).json({
            data:user,
            message:"successfully fetched the  user ",
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

const signIn =async (req,res)=>{
    try {
        const response=await userService.signIn(
        req.body.email,
        req.body.password
        )
        return  res.status(httpStatusCodes.OK).json({
            success:true,
            data:response,
            message:"Successfully signed in",
            err:{}
        })

    } catch (error) {
         return  res.status(httpStatusCodes.UNAUTHORIZED).json({
            success:false,
            data:{},
            message:"Incorrect email/password ",
            err:error
        })
        
        
      
    }
}



module.exports={
    create,
    destroy,
    getById,
    signIn
}