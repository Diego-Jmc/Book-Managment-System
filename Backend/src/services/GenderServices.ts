import { IGenderRepository } from "../interfaces/interfaces";
import { Gender } from "../models/models";
import { GenderAbstractRepository } from "../repositories/repositories";


export default class GenderServices{

 readonly repo:IGenderRepository = new GenderAbstractRepository()

 constructor(){
    
 }

 async findAll():Promise<Gender[]>{
    return await this.repo.findAll()
 }

 async findById(id:number):Promise<Gender | null>{
   return await this.repo.findById(id)
 }

}
