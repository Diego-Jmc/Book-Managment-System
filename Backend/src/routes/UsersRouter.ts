import {Request,Response} from 'express'
const express = require('express')
const router = express.Router()
import UserServices from '../services/userServices'

const service = new UserServices()



router.get('/users/:id',async (req:Request,res:Response)=>{
   try{
        const found = await service.findById(parseInt(req.params.id))
        found != null ? res.send(found) : res.status(204).send()
        return
   }catch(err){
        console.log(err)
        res.status(500).send()
   }
   return
})