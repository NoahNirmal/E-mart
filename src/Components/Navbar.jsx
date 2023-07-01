import React from 'react'
import './Navbar.css'
import {  NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Navbar = () => {
    const Data = useSelector((state)=>state.reducer)
    console.log(Data.login)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">EMart</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink className="nav-link" aria-current="page" to="/" >Home</NavLink>

                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products" >Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                                {/* <NavLink to="/products">About</NavLink> */}
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>


                        </ul>
                        <div className="buttons">
                            {
                                Data.login ===true?(<>
                                 <button  className="btn btn-outline-dark ms-2">Profile</button>
                                </>):
                                (<>

                                
                            <NavLink to="/login" className="btn btn-outline-dark ">Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2" >Register</NavLink>
                                   
                                </>)
                            }
                         

                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">Cart({Data.Cart.length})</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
