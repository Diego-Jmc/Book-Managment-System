import { IEditorialRepository } from "../interfaces/interfaces";
import { Editorial } from "../models/models";
import { EditorialAbstractRepository } from "../repositories/repositories";



export default class EditorialServices{

    readonly repo:IEditorialRepository = new EditorialAbstractRepository()

    async findAll():Promise<Editorial[]>{

        return await this.repo.findAll()
    }
    
    async findById(id:number):Promise<Editorial | null>{
        return await this.repo.findById(id) 
    }

}