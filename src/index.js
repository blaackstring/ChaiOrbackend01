import dotenv from 'dotenv'
import express from 'express';
import DBConnect from './db/indexx.js';
dotenv.config({path:'../.env'})
import { app } from './app.js';


DBConnect().then(()=>{
    app.listen(process.env.PORT||8080,()=>{
console.log("server running on ",process.env.PORT)

app.on("error",(error)=>{
    console.log("Error",error)
    throw error
})
    })
}).catch((error)=>{
    console.log("Error while connecting",{error});
})
