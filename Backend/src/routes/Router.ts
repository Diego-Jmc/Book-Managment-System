import { NextFunction, Request, Response } from "express"

const express = require('express')
const rolRouter = require('./RolesRouter')
const genderRouter = require('./GendersRouter')
const editorialRouter = require('./EditorialRouter')
const booksRouter = require('./BooksRouter')
const usersRouter = require('./UsersRouter')
import jwtFilter from '../security/jwtFilter'

const router = express.Router()


router.use(async (req:Request, res:Response, next:NextFunction) => {

    const authHeader = req.headers.authorization;

    if (authHeader) {

        const token = authHeader.split(' ')[1]
        jwtFilter(token).then(data=>{
            console.log(`User ${data.email} is allowed to use the API`)
            next()
        }).catch(err=>{
            console.log(err)
            res.status(403).send()
        })
   
    } else {
        res.status(401).send()
    }

})

router.use(usersRouter)
router.use(rolRouter)
router.use(genderRouter)
router.use(editorialRouter)
router.use(booksRouter)


module.exports = router






