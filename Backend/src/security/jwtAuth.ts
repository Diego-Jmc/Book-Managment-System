import { Request,Response } from "express"
import { UserLogin } from "../interfaces/interfaces"
import UserServices from "../services/userServices"

const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')
const express = require('express')
dotenv.config()


const secret_key = process.env.JWT_SECRET_KEY


const authRouter = express.Router()


function checkUser(user:UserLogin):boolean{
    
    return user.email == 'admin@gmail.com' && user.password == '1234'
}


function generateJwt(user:UserLogin):string{

    const token = jwt.sign(user,secret_key,{
        expiresIn: '48h',

    })
    return token
}


// api routes definition


const service:UserServices = new UserServices()


authRouter.post('/signup',async (req:Request,res:Response)=>{


    try{
       const created = await service.create(req.body)

       if(created){
        res.status(200).send('created')
       }else{
        res.status(400).send()
       }

    }catch(err){
        res.status(400).send()
    }
})

authRouter.post('/login',async (req:Request,res:Response)=>{


   const user = await service.checkCredentials(req.body)


    if(user != null){
        const token = generateJwt(req.body)
        res.status(200).json({
            token:token,
            user:user
        })

    }else{
        res.status(403).send()
    }
})



module.exports = authRouter