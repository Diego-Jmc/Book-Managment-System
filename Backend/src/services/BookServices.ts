import { Book } from "../models/models";
import { BookAbstractRepository } from "../repositories/repositories";


export default class BookServices{

    readonly repo = new BookAbstractRepository()


    async findAll():Promise<Book[]>{   
        
        const books = await this.repo.findAll()
        return books

    }

    async findById(id:number):Promise<Book | null>{

        const foundBook = await this.repo.findById(id)
        return foundBook 

    }

    async create(book:Book):Promise<void>{
        await this.repo.create(book)
    }

    async removeById(id:number):Promise<boolean>{
        return await this.repo.deleteByID(id)
    }


}