import dotenv from 'dotenv'
import express from 'express';
import DBConnect from './db/indexx.js';
dotenv.config({path:'../.env'})

const PORT = process.env.PORT || 8080;  // Use PORT from .env or default to 8080
const app = express();

(async () => {
    try {
        const isConnected = await DBConnect();
        if (isConnected) {
            app.get('/',(req,res)=>{
                res.send('hello'
                )
                console.log(isConnected)
            })
            app.listen(PORT, () => {
                console.log(`Server running on port ${PORT}`);
            });
        }
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
})();
