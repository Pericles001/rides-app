import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {user} from "../user";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="navigation bar">
                    <span className="badge badge-pill ">
                        <h4 className='text-white '>Edvora</h4>
                    </span>
                </a>
                <span className='fw-bold text-white' >
                        {user.name}

                    <img className='m-4' src={user.url} alt='user profile image'/>
                </span>
            </div>
        </nav>
    )
}