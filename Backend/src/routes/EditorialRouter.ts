import { Request, Response } from "express"
import EditorialServices from "../services/EditorialServices"
const express = require('express')

const editorialRouter =  express.Router()


const service = new EditorialServices()


editorialRouter.get('/editorials',async (req:Request,res:Response)=>{
    
    const foundEditorials = await service.findAll()
    res.status(200).json(foundEditorials)

})
.get('/editorials/:id',async (req:Request,res:Response)=>{
    try{
        const found = await service.findById(parseInt(req.params.id))
        found != null ? res.status(200).json(found) : res.status(204).send()
    }catch(err){
        res.status(401).send()
    }
})


module.exports = editorialRouter
