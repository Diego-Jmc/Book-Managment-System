
"use client"

import { Book } from "@/interfaces/interfaces"
import axios from "axios"
import { useEffect, useState } from "react"
import '../components/bookcard.css'
import '../books/books.css'
import BookCard from "../components/BookCard"


export default function Books(){

    const [books,setBooks] = useState<Book[]>([])

    async function fechtBooks():Promise<Book[]>{
        const response = await axios.get(`${process.env.server_url}/v1/books`)
        return response.data
    } 

    useEffect(()=>{
    
       fechtBooks().then(data=>{
        console.log(data)
        setBooks(data)
       })

    },[])



    return(

        <div className="container">
               <div className="book-cards-container">

               {
                books.map(book=> <BookCard  {...book}/>)
            }

                </div> 
        </div>

    )


}