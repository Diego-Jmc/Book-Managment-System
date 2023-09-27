
"use client"
import { imageDb } from "./config"
import { ChangeEvent, useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
const { v4 } = require('uuid');

export default function Administrator() {

    const [img, setImg] = useState<File | null>()

    function handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0])
        }
    }


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        if (img != undefined) {
            const imageUrl = ref(imageDb, `books/${v4()}`)

            uploadBytes(imageUrl, img).then(res => {

                getDownloadURL(res.ref).then(url => {
                    console.log("The url is:" + url)
                })

            })


        }

    }


    return (

        <div className="container administrator-page-container">

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="formFileLg" className="form-label">Select an image</label>
                    <input className="form-control form-control-lg" id="formFileLg" type="file" onChange={handleChangeImage} />
                </div>

                <div className="form-group">
                    <label htmlFor="book_name_input">Book name</label>
                    <input type="text" className="form-control" id="book_name_input" placeholder="Book name" />
                </div>

                <div className="form-group">
                    <label htmlFor="isbn_input">ISBN</label>
                    <input type="text" className="form-control" id="isbn_input" placeholder="ISBN" />
                </div>

                <div className="form-group">
                    <label htmlFor="sinopsis_input">Sinopsis</label>
                    <textarea className="form-control" id="sinopsis_input" />
                </div>

                <div className="form-group">
                    <label htmlFor="stock_input">Stock</label>
                    <input type="number" className="form-control" id="stock_input" />
                </div>

                <div className="form-group">
                    <label htmlFor="release_date">Release date:</label>
                    <input type="date" className="form-control" id="release_date" name="release_date" />
                </div>


                <div className="form-group">
                <label htmlFor="gender_select">Select main gender</label>
                <select className="form-control">
                    <option>Default select</option>
                </select>
                </div>

          
                <div className="form-group">
                <label htmlFor="editorial_select">Select editorial</label>
                <select className="form-control">
                    <option>Default select</option>
                </select>
                </div>



                <button type="submit" className="btn btn-dark">Submit</button>
            </form>

        </div>

    )
}