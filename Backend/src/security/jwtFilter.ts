
var jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const secret_key = process.env.JWT_SECRET_KEY

export default async function verifyJwt(token:string){

         const decoded = await jwt.verify(token, secret_key)       
         return decoded

}
