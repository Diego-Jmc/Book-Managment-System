import { Role } from "../models/models"


export interface IDbConnection{
    connect():void

}

export interface UserLogin{
    email:string,
    password:string
}

export interface IRoleRepository {
    findById(id: number): Promise<Role | null>
    findAll(): Promise<Role[]>
  }