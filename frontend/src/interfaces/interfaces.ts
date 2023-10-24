export interface UserLogin{
    email:string,
    password:string
}

export interface Book  {
     id:number,
     isbn: string,
     name: string,
     sinopsis: string,
     fk_gender_id: number,
     image_url: string,
     stock: number,
     fk_editorial_id: number,
     release_date: Date,
  }

  export interface Gender{
    id:number,
    description:string
  }

  export interface Editorial{
    id:number,
    name:string,
    location:string
  }

  export interface User {
    id: number,
    name: string,
    lastname: string,
    email: string,
    password: string,
    role_id: number,
    created_at: string,
    createdAt: string
  }
  
  export interface Review  {
    id: number ,
    fk_user: number,
    fk_book: number,
    commentary: string,
    stars: number,
    date:Date
  }