
"use client"
import { imageDb } from "./config"
import { ChangeEvent, useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
const { v4 } = require('uuid');

export default function Administrator() {

    const [img,setImg]  = useState<File | null>()

    function handleChangeImage(e: ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files.length > 0 ){
            setImg(e.target.files[0])
        }
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
       
        event.preventDefault()
        
       if(img != undefined){
        const imageUrl =  ref(imageDb,`books/${v4()}`)
   
        uploadBytes(imageUrl,img).then(res=>{

            getDownloadURL(res.ref).then(url=>{
                console.log("The url is:"+url)
            })
            
        })


       }

    }
    

    return (

        <div className="container administrator-page-container">

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={handleChangeImage} />
                </div>


                <button type="submit" className="btn btn-dark">Submit</button>
            </form>

        </div>

    )
}