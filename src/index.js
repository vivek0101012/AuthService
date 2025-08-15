const express = require("express")
const {PORT}=require ("./config/ServerConfig")
const app=express()


const prepareStartServer =() =>{

app.listen(PORT, ()=>{
    console.log(`app started on port ${PORT}`)
})


}

prepareStartServer();