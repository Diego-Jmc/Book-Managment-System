const express = require('express')
import { Request ,Response } from "express"
const rolRouter = require('./RolesRouter')


const router = express.Router()


router.use(rolRouter)

module.exports = router






