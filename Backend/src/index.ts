import PostgreDbConnection from "./database/database_connection"

import { RoleAbstractRepository } from "./repositories/repositories"



const dotenv = require('dotenv')
const express = require('express')
const app = express()
const cors = require('cors')

dotenv.config();

const PORT = process.env.PORT  || 3000;

const db = new PostgreDbConnection()

const repo = new RoleAbstractRepository();



repo.findAll().then(data=>{
    console.log(data)
})

app.use(cors())


app.use(express.json())
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})


