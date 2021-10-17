import "./navbar.css"
import React from 'react'
import {Link} from "react-router-dom"


export default function Navbar() {
    return (
            
        <div className="navbar">
            <Link to="/"> <div id="logo">RV BANK</div></Link>
            <div id="nav-content">
                <ul>
                   <Link to="/"> <li>Home</li></Link>
                   <Link to="/add"> <li >Transfer Money</li></Link>
                   <Link to="/user"> <li >All Transactions</li></Link>
                    
                </ul>
            </div>
        </div>
        
    )
}
