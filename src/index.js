const express = require("express")
const {PORT}=require ("./config/ServerConfig")
const ApiRoutes= require("./routes/index")
const bodyParser= require("body-parser")
const db = require("./models")
const prepareStartServer =() =>{

const app=express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api",ApiRoutes)
app.listen(PORT, async ()=>{
    console.log(`app started on port ${PORT}`)

    // if(process.env.DB_SYNC){
    //     db.sequelize.sync({alter:true})
    // }

})


}

prepareStartServer();