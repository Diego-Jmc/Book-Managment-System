"use client"

import './navbar.css'
import Link from 'next/link'

export default function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <a className="navbar-brand" href="#">Navbar</a>
      
        <div className="collapse navbar-collapse nav-bar-ul-div" id="navbarTogglerDemo03">

          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      
            <li className="nav-item">
            <Link className="nav-link" href="/">Home</Link>

            </li>
      
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
      
            <li className="nav-item">
              <a className="nav-link" href="#">Book Loans</a>
            </li>
      

      
            <li className="nav-item">
             <Link className="nav-link" href="/administrator">Administrator</Link>
            </li>

          </ul>
      
        </div>
        
      </nav>
      
    )

}