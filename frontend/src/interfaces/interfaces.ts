export interface UserLogin{
    email:string,
    password:string
}

export interface Book  {
     isbn: string;
     name: string;
     sinopsis: string;
     fk_gender_id: number;
     image_url: string;
     stock: number;
     fk_editorial_id: number;
     release_date: Date;
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