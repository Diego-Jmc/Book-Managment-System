import { IRoleRepository ,IUserRepository } from "../interfaces/interfaces";
import { Role, User } from "../models/models";

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
            console.error(`Error al crear el usuario: ${err}`);
            
            throw err; 
        }
    }


    update(user: User): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}