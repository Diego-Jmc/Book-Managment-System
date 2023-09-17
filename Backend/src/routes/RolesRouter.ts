import {Request,Response} from 'express'
const express = require('express')
const router = express.Router()



router.get('/rols',async (req:Request,res:Response)=>{
    res.send('rols!')
})
.get('/rols/:id',async (req:Request,res:Response)=>{
    res.send(`rols working for id ${req.params.id}`)
})



module.exports = router