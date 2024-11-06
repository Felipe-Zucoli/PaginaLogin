import React from 'react'
import "./NavBar.css"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='NavBar'>
            <Link to ="/login">Login</Link>
        </div>
    )
}

export default NavBar
