"use client"
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { Book} from '@/interfaces/interfaces';
import axios from 'axios';
import { useRouter } from 'next/navigation'
import './book.css'
import CommentBox from '@/app/components/CommentBox';

interface pageProps{
    params : {id:string}
}

export default function Book({params}:pageProps){

    const router = useRouter()
    const [book,setBook] = useState<Book>()
    const [editorial,setEditorial] = useState<String>("")
    const [gender,setGender] = useState<String>("")


    function isUserAuth():boolean{

        const token = Cookies.get('bms-token')
        const id = Cookies.get('bms-user-id')
        return token != undefined && id != undefined

    }


    function fetchGender(id:number){
        const token = Cookies.get('bms-token')
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }


        return axios.get(`${process.env.server_url}/v1/genders/${id}`,axiosConfig)

    }

    function fetchEditorial(id:number){

        const token = Cookies.get('bms-token')
        const axiosConfig = {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        }

        return axios.get(`${process.env.server_url}/v1/editorials/${id}`,axiosConfig)

    }



    useEffect(() => {
        const token = Cookies.get('bms-token')
    
        if (isUserAuth()) {
            const axiosConfig = {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            }
    
            axios.get(`${process.env.server_url}/v1/books/${params.id}`, axiosConfig)
                .then(res => {
                    setBook(res.data);

                     fetchEditorial(res.data.fk_editorial_id).then(res=> setEditorial(res.data.name))
                     fetchGender(res.data.fk_gender_id).then(res=> setGender(res.data.description))  

                })
                .catch(err => {
                    console.log(err);
                });
        }else{
            router.push('/login')
        }
    }, []);
    

    return (
        <div className='container'>
                <div className='book-info-container'>
                    <div className='img-container'>
                    <img className="book-info-img" src={book?.image_url} alt="Book cover" />
                    </div>
                    <div className='info-box'>
                        <h2>{book?.name}</h2>
                        <p>{book?.sinopsis}</p>
                        <h3>Editorial : {editorial}</h3>
                        <h3>Gender : {gender}</h3>
                    </div>
                </div>

                <CommentBox></CommentBox>

        </div>
    )
}