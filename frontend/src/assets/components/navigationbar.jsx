import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    
    return (
        <div className="navbar-container">
            <h2 className="navbar-heading">Dean AP Office Management System</h2>

            <ul className="navbar-list">

                <Link to='/'>
                    <li className="navbar-item">
                        Inward
                    </li>
                </Link>
                <Link to='/outward'>
                    <li className="navbar-item">
                        Outward
                    </li>
                </Link>
            </ul>
        </div>
    )
}