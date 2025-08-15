const { Model } = require("sequelize");
const UserRepository= require("../repository/user-repository")

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

  



}


 module.exports= UserService;