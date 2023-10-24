import { IBookRepository, IEditorialRepository, IGenderRepository, IRoleRepository ,IUserRepository } from "../interfaces/interfaces";
import { Book, Editorial, Gender, Role, User } from "../models/models";

export class RoleAbstractRepository implements IRoleRepository{

    constructor(){

    }

    async findById(id: number): Promise<Role | null> {
        
        try{

            const role = await Role.findByPk(id)
            return role || null    

        }catch(err){
            throw new Error(`Error trying to find role ${err}`)
        }

    }

    async findAll(): Promise<Role[]> {

        const roles = await Role.findAll({attributes:['id','description']})

        const rolesData = roles.map((role) => role.get({ plain: true }))

        return rolesData
    }

}


export class UserAbstractRepository implements IUserRepository{

    async findByEmail(email: string): Promise<User | null> {
        const users = await User.findAll()
        const user = users.find((user) => user.email === email)
        return user || null
    }
    
   async findById(id: number): Promise<User | null> {
        
        try{
             const user = await User.findByPk(id)
             return user?.get({plain:true})
             
        }catch(err){
            throw new Error(`Error trying to find user ${err}`)
        }    
    
    }


   async findAll(): Promise<User[]> {

        const users = await User.findAll()
        return users.map(user => user.get({plain:true}))

    }

   async deleteById(id: number): Promise<boolean> {

    try{
        const deletedCount = await User.destroy({
            where:{id}
        })

        return deletedCount > 0 

    }catch(err){
        throw new Error(`Error deleting role with ID ${id} :  ${err}`)
    }   
    

    }


    async create(user: User): Promise<void> {

        try {

             await User.create({
                name: user.name,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                role_id: user.role_id,
                created_at: new Date(),
              })

 
        } catch (err) {
            console.error(`Error al crear el usuario: ${err}`)
            
            throw err
        }
    }


    update(user: User): Promise<boolean> {
        throw new Error("Method not implemented.")
    }
    
}

export class GenderAbstractRepository implements IGenderRepository{

    async findAll(): Promise<Gender[]> {
       const genders = await Gender.findAll()
        return genders.map(gender=> gender.get({plain:true}))
    }

    async findById(id: number): Promise<Gender | null> {
        
        try{
            const gender = await Gender.findByPk(id)
        
            if(gender){
                return gender?.get({plain:true}) 
            }
            return null

        }catch(err){
            throw new Error("Err trying to find gender")
        }

           
    }

    async create(gender: Gender): Promise<void> {
        try{

            await Gender.create({
                description:gender.description
               })

        }catch(err){
            throw new Error("Error trying to create gender")
        }

    }

}

export class EditorialAbstractRepository implements IEditorialRepository{

    async findAll(): Promise<Editorial[]> {

        const foundEditorials = await Editorial.findAll()
        return foundEditorials.map(editorial => editorial)

    }
    
    async findById(id: number): Promise<Editorial | null> {
        try{

            const editorial = await Editorial.findByPk(id)
            
            if(editorial){
                return editorial
            }

            return null

        }catch(err){
            throw new Error("Err trying to find editorial")

        }
    }

    async create(gender: Editorial): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
}


export class ReviewAbstractRepository{
    
}

export class BookAbstractRepository implements IBookRepository{

    async deleteByID(id: number): Promise<boolean> {

      try{
        const deletedCount = await Book.destroy({
            where:{id}
        })

        return deletedCount > 0
      }catch(err){
        throw new Error(`Delete book failed: ${err}`)
      }

    }

    async findAll(): Promise<Book[]> {

        const books = await Book.findAll()
        return books.map(book=> book.get({plain:true}))

    }
    
   async findById(id: number): Promise<Book | null> {
        const foundBook = await Book.findByPk(id)
        return foundBook
    }

    async create(book: Book): Promise<void> {

       try{

        await Book.create({
         isbn: book.isbn,
         name: book.name,
         sinopsis: book.sinopsis,
         fk_gender_id: book.fk_gender_id,
         image_url: book.image_url,
         stock: book.stock,
         fk_editorial_id: book.fk_editorial_id,
         release_date: book.release_date,
        })

       }catch(err){
        throw new Error(`${err}`);

       }

    }

}

