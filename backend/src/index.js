// require('dotenv').config({paths: './env'})
import dotenv from "dotenv"


import connectDB from "./db/index.js";

dotenv.config({
    paths: './env'
})


connectDB()



/*
import express from "express"
const app = express()

( async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", () => {
            console.log("ERR: ", error);
            throw err
            
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
            
        })
    } catch (error){
        console.error("ERROR: ", error)
        throw err
    }
})()

*/