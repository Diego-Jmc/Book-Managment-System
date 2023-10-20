import { Request, Response } from "express"
import BookServices from "../services/BookServices"
const express = require('express')

const bookRouter = express.Router()


const service = new BookServices()

bookRouter.get('/books', async (req:Request,res:Response)=>{
    const books = await service.findAll()
    res.json(books)
    return 
})
.get('/books/:id',async (req:Request,res:Response)=>{

    try{

        const book = await service.findById(parseInt(req.params.id))
        res.json(book)
        return
    }catch(err){
        res.status(204).send()
    }


})
.post('/books',async (req:Request,res:Response)=>{

    try{

        const bookToCreate = req.body
        await service.create(bookToCreate)
        res.status(200).send('Book created')
        return

    }catch(err){
        res.status(204).send()
    }

})
.delete('/books/:id',async (req:Request,res:Response)=>{

    
    try{
        const deleted = await service.removeById(parseInt(req.params.id))
        deleted? res.status(200).send('deleted') : res.status(201)
        return
    }catch(err){
      console.log(err)
        res.status(204).send()
    }

})

module.exports = bookRouter