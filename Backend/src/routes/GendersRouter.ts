import { Request, Response } from "express"
import GenderServices from "../services/GenderServices"

const express = require('express')
const gendersRouter = express.Router()


const service:GenderServices = new GenderServices()



gendersRouter.get('/genders',async (req:Request,res:Response)=>{

    try{
        res.status(200).json(await service.findAll())
        return
    }catch(err){
        res.send(500)
    }
})

.get('/genders/:id',async (req:Request,res:Response)=>{
    
    try{
    
        const genderFound = await service.findById(parseInt(req.params.id))
        genderFound !=null ? res.status(200).json(genderFound) : res.status(204)
        return
    }catch(err){
        res.status(500).send('No books found')
    }

})


module.exports = gendersRouter