
"use client"

import { Book } from "@/interfaces/interfaces"
import axios from "axios"
import { useEffect, useState } from "react"
import '../components/bookcard.css'
import '../books/books.css'
import BookCard from "../components/BookCard"
import { useRouter } from 'next/navigation'

import Cookies from 'js-cookie';

export default function Books(){
    const router = useRouter()


    const [books,setBooks] = useState<Book[]>([])


    function isUserAuth():boolean{

        const token = Cookies.get('bms-token')
        const id = Cookies.get('bms-user-id')
        return token != undefined && id != undefined

    }

    async function fetchBooks(): Promise<Book[]> {
        const token = Cookies.get('bms-token')

        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
      
        const response = await axios.get(`${process.env.server_url}/v1/books`, config)
        return response.data
      }
      
    useEffect(()=>{
       
        if(isUserAuth()){
            fetchBooks().then(data=>{
                console.log(data)
                setBooks(data)
            })
        }else{
            router.push('/login')
        }


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