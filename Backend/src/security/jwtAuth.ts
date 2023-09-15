import { Request,Response } from "express"
import { UserLogin } from "../interfaces/interfaces"
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const express = require('express')
dotenv.config()


const secret_key = process.env.JWT_SECRET_KEY


const authRouter = express.Router()


console.log(`THE SECRET KEY IS ${secret_key}`)

function checkUser(user:UserLogin):boolean{
    
    return user.email == 'admin@gmail.com' && user.password == '1234'


}

function generateJwt(user:UserLogin):string{

    const token = jwt.sign(user,secret_key,{
        expiresIn: '48h',

    })
    return token
}



authRouter.post('/login',(req:Request,res:Response)=>{
    if(checkUser(req.body)){
        const token = generateJwt(req.body)
        res.status(200).json({
            token:token
        })
    }else{
        res.status(403).send()
    }
})



module.exports = authRouter