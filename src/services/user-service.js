const jwt =require("jsonwebtoken")
const UserRepository= require("../repository/user-repository")
const {JWT_KEY}=require("../config/ServerConfig")
const bcrypt =require("bcrypt");
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
  
  createToken(user){
    try {

      const result= jwt.sign(user,JWT_KEY,{expiresIn:'1h'})
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

 #checkPassword(plainPassword,encryptedPassword){
  try {
       const result = bcrypt.compareSync(plainPassword,encryptedPassword);

       return result

    } catch (error) {
    console.log("something went wrong with password verification",error)
    throw error
    
  }

}

async signIn(email,plainPassword){
  try {
    
  const user= await this.UserRepository.getByEmail(email);
  const passwordMach= this.#checkPassword(plainPassword,user.password)

  if(!passwordMach){
    console.log("password does not match")
    
    throw error
  }

  const newJwt=this.createToken({email:user.email,id:user.id})
  return newJwt;
    
  } catch (error) {
    console.log("something went wrong with the sign in process",error)
    throw error
    
  }
}

async isAuthenticated(token){
  try {

    console.log(token)
    const response=this.verifyToken(token)
    const user=await this.UserRepository.getById(response.id)
    if(!user){
      throw {error:" no user exist"}
    }
    return user.id
    
    
  } catch (error) {
    console.log("something went wrong with isauthenticated token")
    throw error
    
  }
}

async isAdmin(userId){
  try {
    return await this.UserRepository.isAdmin(userId);
  } catch (error) {
    console.log("Something went wrong with service layer")
    throw error
    
  }
}



}


 module.exports= UserService;