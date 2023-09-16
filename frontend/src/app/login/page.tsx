"use client"

import 'bootstrap/dist/css/bootstrap.css'
import './login.css'
export default function Login() {
    return (

        <div className="container login-page-container">

            <div className='login-form-container'>

            
                <div className="registration-form">

                <div className='login-header-container'>
                    <h2>Login</h2>
                </div>

                    <form>

                        <div className="form-group">
                            <label htmlFor="email_input">Email address</label>
                            <input type="email" className="form-control" id="email_input" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password_input">Password</label>
                            <input type="password" className="form-control" id="password_input" placeholder="Password"/>
                        </div>

                        <button type="submit" className="btn btn-dark submit-login-btn">Log in</button>
                    </form>

                    
                <div className='registration'>

                   <small  className="form-text text-muted" > don't have an account ?  <a href='/registration'>Register here</a></small>
                </div>

                </div>

            </div>

        </div>
    )
}