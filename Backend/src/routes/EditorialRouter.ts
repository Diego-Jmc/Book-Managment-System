import { Request, Response } from "express"
import EditorialServices from "../services/EditorialServices"
const express = require('express')

const editorialRouter =  express.Router()


const service = new EditorialServices()


editorialRouter.get('/editorials',async (req:Request,res:Response)=>{
    res.send('Editorials working')
}).get('/editorials/:id',async (req:Request,res:Response)=>{

})


module.exports = editorialRouter
