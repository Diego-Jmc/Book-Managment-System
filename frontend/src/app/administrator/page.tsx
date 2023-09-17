
"use client"
import { imageDb } from "./config"
import { ChangeEvent, useState } from 'react'
import axios from 'axios'


export default function Administrator() {

    const [img,setImg]  = useState<File | null>()

    function handleChangeImage(e: ChangeEvent<HTMLInputElement>){
        if(e.target.files && e.target.files.length > 0 ){
            setImg(e.target.files[0])
        }
    }


    function handleSubmit(){
    }

    return (

        <div className="container administrator-page-container">

            <form>

                <div>
                    <label htmlFor="formFileLg" className="form-label">Large file input example</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={handleChangeImage} />
                </div>


                <button type="submit" className="btn btn-dark">Submit</button>
            </form>

        </div>

    )
}