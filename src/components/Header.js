import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    return (
        <header id = "header" >
            <div className = "inner" >
                <Link to = "/" > Home </Link> 
                <Link to = "/login" > Login </Link>
                <Link to = "/showview" > showview </Link>
            </div> 
        </header >
    );
}
export default Header;