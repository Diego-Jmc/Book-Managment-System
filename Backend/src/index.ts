import PostgreDbConnection from "./database/database_connection"
import { Request,Response } from "express"
const api_router = require('./routes/Router')
const dotenv = require('dotenv')
const auth = require('./security/jwtAuth')

dotenv.config();

const express = require('express')
const app = express()
const cors = require('cors')

// API and PORT configuration

const api_version = process.env.API_VERSION
const PORT = process.env.PORT  || 3002


// database connection init (necessary to use ORM)

const db = new PostgreDbConnection()


// middleware configuration
app.use(cors())
app.use(express.json())

// server routing configuration

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

app.get('/',(req:Request,res:Response)=>{
    res.send('SERVER WORKING')
})

app.use(`/${api_version}`,api_router)

// authentication


app.use(auth)