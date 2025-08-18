const { where } = require("sequelize");
const {User,Role}=require("../models/index");
const { compareSync } = require("bcrypt");
const ValidationError=require("../utils/validation-error")
class UserRepository {

    async create(data){
        try {
            const user= await User.create(data);
            return user;
            
        } catch (error) {
      
            if(error.name=="SequelizeValidationError"){
                let validationError= new ValidationError(error);
                console.log(validationError)
                throw validationError
                            // console.log("creating a validation error")

            }
            console.log("something went wrong on repository layer")
            throw error
        }


    }

     async destroy(userId){
        try {
             await User.destroy({
                where:{id:userId}
            });
            return true;
            
        } catch (error) {
            console.log("something went wrong on repository layer")
            throw error
        }


    }


     async getById(userId){
        try {
            console.log(userId)
            const user= await User.findByPk(userId,{
                attributes:['email','id']
            })
            
            return user;
            
        } catch (error) {
            console.log("something went wrong on repository layer")
            throw error
        }


    }

    async getByEmail(userEmail){
       try {
         const user = User.findOne({
            where:{
                email:userEmail
            }
        })
        return user
        
       } catch (error) {
        console.log("something went wrong with fetching the user",error)
        throw error
        
       }
    }

    async isAdmin(userId){
        try {
            const user=await User.findByPk(userId);
            const adminRole=await Role.findOne({
                where:{
                    name:'ADMIN'
                }
            })
           await user.addRole(adminRole)
          
            return user.hasRole(adminRole);

        } catch (errors) {
            console.log("something went wrong with the isAdmin at repo layer")
            throw error
        }
    }

}

module.exports= UserRepository