
import { Request, Response } from "express"
import ReviewServices from "../services/ReviewServices"
import { Review } from "../models/models"
const express = require('express')
const router = express.Router()



const services = new ReviewServices()

router.get('/reviews', async (req:Request,res:Response)=>{
    const reviews = await services.findAll()
    res.json(reviews)
    return
}).get('/reviews/book/:id',async (req:Request,res:Response)=>{
   
    try{
        const reviews = await services.getReviewsByBookId(parseInt(req.params.id))
        res.json(reviews)

    }catch(err){
        res.status(400)
    }

    return
}).get('/reviews/average/:id',async (req:Request,res:Response)=>{

    try{
        const avg = await services.getBookAverageRating(parseInt(req.params.id))
        res.send(avg)
    }catch(err){
        res.sendStatus(400)
        return 
    }

    return
})

module.exports = router