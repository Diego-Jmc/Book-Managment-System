"use client"

import 'bootstrap/dist/css/bootstrap.css'
import './login.css'
import React, { ChangeEvent, useState } from 'react';
import { UserLogin } from '@/interfaces/interfaces';
import axios from 'axios';




export default function Login() {

    let [userLogin, setUserLogin] = useState<UserLogin>({
        email: "",
        password: ""
    })


    let [showLoginError,setShowLoginError] = useState(false)


    const handleInputChange = ( event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        
        const updateUserState: UserLogin = { ...userLogin, [name]: value };
 
        setUserLogin(updateUserState)
     };


     const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
 

        axios.post(`http://localhost:3001/login`,userLogin)
        .then(res=>{

            console.log(res.data)

           

        }).catch(err=>{
                       
                setShowLoginError(true)
            
        })


      }


    return (

        <div className="container-fluid login-page-container">

            <div className='login-form-container'>


                <div className="registration-form">

                    <div className='login-header-container'>
                        <h2>Login</h2>
                    </div>

                    <form onSubmit={handleOnSubmit}>

                        <div className="form-group">
                            <label htmlFor="email_input">Email address</label>
                            <input type="email" name="email" onChange={handleInputChange} value={userLogin.email}    className="form-control" id="email_input" aria-describedby="emailHelp" placeholder="Enter email" required />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_input">Password</label>
                            <input type="password"  name ="password" onChange={handleInputChange} value={userLogin.password} className="form-control" id="password_input" placeholder="Password" required />
                        </div>

                        <button type="submit" className="btn btn-dark submit-login-btn">Log in</button>
                    </form>


                    <div className='registration'>

                        <small className="form-text text-muted" > don't have an account ?  <a href='/registration'>Register here</a></small>
                    </div>


                   {
                    showLoginError?  
                    
                    
                    <div className="alert alert-danger" role="alert">

                    Invalid user or password

                     </div> 
                     
                     : ""
                   }


                </div>

 

            </div>

        </div>
    )
}