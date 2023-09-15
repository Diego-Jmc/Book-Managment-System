import { IRoleRepository } from "../interfaces/interfaces";
import { Role } from "../models/models";

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


