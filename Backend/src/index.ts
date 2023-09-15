import PostgreDbConnection from "./database/database_connection"
const dotenv = require('dotenv')
const express = require('express')
const app = express()
const cors = require('cors')

dotenv.config();

const PORT = process.env.PORT  || 3000;

const db = new PostgreDbConnection()



app.use(cors())
app.use(express.json())
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})


