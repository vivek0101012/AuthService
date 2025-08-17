const { Model } = require("sequelize");
const jwt =require("jsonwebtoken")
const UserRepository= require("../repository/user-repository")
const {JWT_KEY}=require("../config/ServerConfig")
const bcrypt =require("bcrypt")
class UserService{
  constructor(){
    this.UserRepository=new UserRepository ()
  }
  async create (data){
    try {
        const user =await this.UserRepository.create(data);
        return user
        
    } catch (error) {
        console.log("something went wrong at  service layer")
        throw error
    
    }
  }
  async destroy (userId){
    try {
        await this.UserRepository.destroy(userId);
        return true
        
    } catch (error) {
        console.log("something went wrong at  service layer")
        throw error
    
    }
  }

   async getById (userId){
    try {
      const user=  await this.UserRepository.getById(userId);
        return user;
        
    } catch (error) {
        console.log("something went wrong at  service layer")
        throw error
    
    }
  }
  
  crateToken(user){
    try {

      const result= jwt.sign(user,JWT_KEY,{expiresIn:30})
      return result



      
    } catch (error) {

      console.log("something went wrong with token creation")
      throw error
      
    }

  }

  verifyToken(token){
    try {
      const response =jwt.verify(token,JWT_KEY);
      return response
      
    } catch (error) {
      console.log("something went wrong with verification",error)
      throw error;      
    }
  }
checkPassword(plainPassword,encryptedPassword){
  try {
       return  bcrypt.compare(plainPassword,encryptedPassword);
    } catch (error) {
    console.log("something went wrong with password verification",error)
    throw error
    
  }

}



}


 module.exports= UserService;