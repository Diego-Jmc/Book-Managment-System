
import { User } from "../models/models"
import { UserAbstractRepository } from "../repositories/repositories"
import { IUserRepository, UserLogin, UserResult } from "../interfaces/interfaces"
const bcrypt = require('bcrypt')



export default class UserServices{

     readonly repo:IUserRepository = new UserAbstractRepository()
     salt = 10 
         
     constructor(){
    
     }

     async findById(id:number):Promise<User | null>{
        return await this.repo.findById(id)
     }
    

     async checkUser(email:string):Promise<boolean>{
        const users = await this.findAll()  
        return users.some(user => user.email == email)
     }

     async findAll():Promise<User[]>{
        return await this.repo.findAll()
     }



     async checkCredentials(userLogin: UserLogin): Promise<UserResult | null> {
        const foundUser = await this.repo.findByEmail(userLogin.email);
    
        if (foundUser !== null) {
            const passwordMatch = await new Promise<boolean>((resolve) => {
                bcrypt.compare(userLogin.password, foundUser.password, (err: any, result: any) => {
                    if (err) {
                        resolve(false);
                    } else {
                        resolve(result);
                    }
                });
            });
    
            if (passwordMatch) {
                const userResult: UserResult = {
                    id: foundUser.id,
                    name: foundUser.name,
                    lastname: foundUser.lastname,
                    email: foundUser.email,
                    role_id: foundUser.role_id,
                };
    
                return userResult;
            }
        }
    
        return null;
    }

    

     async create(user:User):Promise<boolean>{
        
        const userExists:boolean = await this.checkUser(user.email)
        
        console.log(`El usuario existe? ${userExists}`)
        
        if(!userExists){
            bcrypt.hash(user.password , this.salt, (err: any, hash: any) => {
                user.password = hash // asing the new hashed password to the new user
                
        
                this.repo.create(user);

                
            })

            return true
        }
            
            return false
        


     }



}