const {StatusCodes}= require("http-status-codes");
class AppError extends Error {

    constructor(name="App error",
        message="Something went wrong",
        explanation="something went wrong",
        statusCode=StatusCodes.INTERNAL_SERVER_ERROR
    ){
        super()
        this.name=name,
        this.message=message,
        this.explanation=explanation,
        this.statusCode=statusCode;

    }
    

}


module.exports=AppError;