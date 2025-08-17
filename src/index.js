const express = require("express")
const {PORT}=require ("./config/ServerConfig")
const app=express()
const ApiRoutes= require("./routes/index")
const bodyParser= require("body-parser")
const prepareStartServer =() =>{

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use("/api",ApiRoutes)
app.listen(PORT, async ()=>{
    console.log(`app started on port ${PORT}`)


})


}

prepareStartServer();