
"use client"
import './admin.css'
import { imageDb } from "./config"
import { ChangeEvent, useEffect, useState } from 'react'
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { Book, Editorial, Gender } from '@/interfaces/interfaces'
import axios from 'axios'
const { v4 } = require('uuid');
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation'

const CLASS_SUCESS = 'alert alert-success'
const CLASS_FAIL = 'alert alert-danger'


export default function Administrator() {
    const router = useRouter()
    const [notificationMessage, setNotificationMessage] = useState({
        message: '',
        class: 'alert alert-danger'
    })

    function isUserAuth():boolean{

        const token = Cookies.get('bms-token')
        const id = Cookies.get('bms-user-id')
        return token != undefined && id != undefined

    }

    function resetForm() {
        setBookBody({
            id:0,
          isbn: "",
          name: "",
          sinopsis: "",
          fk_gender_id: 1,
          image_url: "none",
          stock: 1,
          fk_editorial_id: 0,
          release_date: new Date()
        });
      
        setImg(null); 
      }

    const [img, setImg] = useState<File | null>()
    const [showNotification, setShowNotification] = useState<boolean>(false)
    const [genders, setGenders] = useState<Gender[]>([])
    const [editorials, setEditorials] = useState<Editorial[]>([])
    const [bookBody, setBookBody] = useState<Book>({
        id:0,
        isbn: "",
        name: "",
        sinopsis: "",
        fk_gender_id: 1,
        image_url: "none",
        stock: 1,
        fk_editorial_id: 0,
        release_date: new Date()
    })

    function showNotificationMessage(message:string,boxClass:string) {

        setNotificationMessage({
            message:message,
            class:boxClass,
        })

        setShowNotification(true)

        setTimeout(() => {
            setShowNotification(false)
        }, 3000);
    }

    function submitBook(book: Book) {
        const token = Cookies.get('bms-token');
    
        axios.post(`${process.env.server_url}/v1/books`, book, {
            headers: {
                Authorization: `Bearer ${token}` 
            }
        })
        .then(data => {
            showNotificationMessage('Book added', CLASS_SUCESS)
        })
        .catch(err => {
            showNotificationMessage(err, CLASS_FAIL)
        });
    }

    function handleChangeImage(e: ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setImg(e.target.files[0])
        }
    }

    function handleAddBookFormChange(event: ChangeEvent<HTMLInputElement>) {

        const { name, value } = event.target

        setBookBody((prevBookBody) => ({
            ...prevBookBody,
            [name]: value,
        }));
    }

    function handleAddBookFormChangeTextArea(event: React.ChangeEvent<HTMLTextAreaElement>) {
        const { name, value } = event.target;

        setBookBody((prevBookBody) => ({
            ...prevBookBody,
            [name]: value,
        }));
    }

    function handleAddBookSelectChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const { name, value } = event.target;

        setBookBody((prevBookBody) => ({
            ...prevBookBody,
            [name]: value,
        }));
    }



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault()

        if (img != undefined) {
            const imageUrl = ref(imageDb, `books/${v4()}`)

            uploadBytes(imageUrl, img).then(res => {

                getDownloadURL(res.ref).then(url => {
                    const newBookBody = { ...bookBody }
                    newBookBody.image_url = url
                    submitBook(newBookBody)
                    resetForm();
                })

            })
        }

    }


    async function fetchGenders(): Promise<Gender[]> {


        try {
                        
            const token = Cookies.get('bms-token')
            const response = await axios.get(`${process.env.server_url}/v1/genders`, {
                headers: {
                    Authorization: `Bearer ${token}` // Agregar el token al encabezado
                }
            });
            return response.data;
        } catch (error) {
            return [];
        }
    }
    
    async function fetchEditorials(): Promise<Editorial[]> {
        try {
            const token = Cookies.get('bms-token')
            const response = await axios.get(`${process.env.server_url}/v1/editorials`, {
                headers: {
                    Authorization: `Bearer ${token}` // Agregar el token al encabezado
                }
            });
            return response.data;
        } catch {
            return [];
        }

    }

    useEffect(() => {

        if(isUserAuth()){


            fetchGenders().then(genders => {

                setGenders(genders)
            })
    
            fetchEditorials().then(editorials => {
                console.log(editorials)
                setEditorials(editorials)
            })
    
        }else{
            router.push('/login')
        }

    }, [])


    return (

        <div className="container administrator-page-container">

            <div>
                <h1>Add new books</h1>
            </div>
            <div className='form-container'>
                <form onSubmit={handleSubmit} className="add-books-form">
                    <div className="row">
                        <div className="form-group col-sm">
                            <label htmlFor="book_name_input">Book name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="book_name_input"
                                name="name"
                                placeholder="Book name"
                                onChange={handleAddBookFormChange}
                                required
                            />
                        </div>

                        <div className="form-group col-sm">
                            <label htmlFor="isbn_input">ISBN</label>
                            <input
                                type="text"
                                className="form-control"
                                id="isbn_input"
                                name="isbn"
                                placeholder="ISBN"
                                onChange={handleAddBookFormChange}
                                required

                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-sm">
                            <label htmlFor="stock_input">Stock</label>
                            <input
                                type="number"
                                className="form-control"
                                id="stock_input"
                                name="stock"
                                onChange={handleAddBookFormChange}
                                required

                            />
                        </div>

                        <div className="form-group col-sm">
                            <label htmlFor="release_date">Release date:</label>
                            <input
                                type="date"
                                className="form-control"
                                id="release_date"
                                name="release_date"
                                onChange={handleAddBookFormChange}
                                required

                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="sinopsis_input">Sinopsis</label>
                        <textarea
                            className="form-control"
                            id="sinopsis_input"
                            name="sinopsis"
                            onChange={handleAddBookFormChangeTextArea}
                            required

                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender_select">Select main gender</label>
                        <select
                            className="form-control"
                            name="fk_gender_id"
                            onChange={handleAddBookSelectChange}
                        >
                            {
                                genders.map(e => <option key={e.id} value={e.id} >{e.description}</option>)

                            }

                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="editorial_select">Select editorial</label>
                        <select
                            className="form-control"
                            name="fk_editorial_id"
                            onChange={handleAddBookSelectChange}

                        >
                            {
                                editorials.map(e => <option key={e.id} value={e.id} >{e.name}</option>)
                            }

                        </select>
                    </div>

                    <div>
                        <label htmlFor="formFileLg" className="form-label">Select an image</label>
                        <input className="form-control form-control-lg" id="formFileLg" type="file" name="image" onChange={handleChangeImage} />
                    </div>

                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>



            </div>

            {
                showNotification ?

                    <div className={notificationMessage.class} role="alert">
                        {notificationMessage.message}
                    </div>

                    : ""

            }



        </div>

    )
}