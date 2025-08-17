const { where } = require("sequelize");
const {User}=require("../models/index")

class UserRepository {

    async create(data){
        try {
            const user= await User.create(data);
            return user;
            
        } catch (error) {
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

}

module.exports= UserRepository