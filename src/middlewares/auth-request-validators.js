
const validateUserAuth=(req,res,next)=>{

    if(!req.body.email|| !req.body.password){
        return res.status(400).json({
            success:false,
            data:{},
            message:"something went wrong ",
            err:"email or password missing"
            
        })
    }
    next()

}
const validateIsAdminRequest=(req,res,next)=>{
    if(!req.body.userId){
        return res.status(400).json({
            data:{},
            success:false,
            err:{err:"user id not given"},
            message:"incorrect input"
        })
    }
    next();
}

module.exports={
    validateUserAuth,
    validateIsAdminRequest
  
}