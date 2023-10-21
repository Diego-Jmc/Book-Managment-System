"use client"
import { useEffect, useState } from "react"
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'
import axios from "axios";
import { User } from "@/interfaces/interfaces";

export default function User(){

    const router = useRouter()
    const [user,setUser] = useState<User>()


    function isUserAuth():boolean{

        const token = Cookies.get('bms-token')
        const id = Cookies.get('bms-user-id')
        return token != undefined && id != undefined

    }

    useEffect(()=>{

        if (isUserAuth()) {
            const token = Cookies.get('bms-token');
            const id = Cookies.get('bms-user-id');
          
            const headers = {
              Authorization: `Bearer ${token}`
            };
          
            axios
              .get(`${process.env.server_url}/v1/users/${id}`, { headers })
              .then(response => {
                setUser(response.data);
              })
              .catch(err => {
                console.log(err);
              });
          } else {
            router.push('/login');
          }            
        
    },[])


    return (
        <div>

            <p>This is the page for user</p>
            <p>Name  {user?.name} </p>
            <p>Lastnames  {user?.lastname} </p>
            <p>Joinning date :   {user?.created_at} </p>
            
        </div>


    )
}