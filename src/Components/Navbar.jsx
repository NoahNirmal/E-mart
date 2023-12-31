import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  logout } from "../Redux/action";
import {FaShoppingCart} from "react-icons/fa"
import {BiLogIn} from "react-icons/bi"


export const Navbar = () => {
  const Data = useSelector((state) => state.reducer);
  console.log(Data.Logindata[0]);

const disptach=  useDispatch()

  
  // const log = localStorage.getItem("login")
  // if(log){
  //   console.log(JSON.parse(log))
  //   var [logn]=JSON.parse(log)
  //   console.log(logn.name)
  // }
  
  
  
 
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
           <img  className="logoimg" src="./assets/images/EMart.png" alt="logo"/>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                <NavLink className="nav-link" activeclassname="active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeclassname="active" to="/about">
                  About
                </NavLink>
                {/* <NavLink to="/products">About</NavLink> */}
              </li>
              <li className="nav-item">
                <NavLink className="nav-link"  activeclassname="active "to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="buttons">
              {Data.login === true ? (
                <>
                  {/* <button className="btn btn-outline-dark ms-2">Profile</button> */}
                  <span className="dropdown">
                    <button
                      className="btn btn-outline-dark ms-2 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {Data.Logindata[0].username}
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        {/* <button className="dropdown-item" >
                          {Data.Logindata[0].name+" "+Data.Logindata[0].lastname}
                          
                        </button> */}

                        <NavLink className="dropdown-item" to="/login" onClick={()=>{
                          disptach(logout())
                        }}>
                          Logout
                        </NavLink>
                      </li>
                    </ul>
                  </span>
                </>
              ) : (
                <>
                  <NavLink to="/login" className="btn btn-outline-dark ">
                    <BiLogIn /><span className="ms-1">Login</span>
                  </NavLink>
                  <NavLink to="/register" className="btn btn-outline-dark ms-2">
                    Register
                  </NavLink>
                </>
              )}

              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <FaShoppingCart /><span className="ms-1">{Data.Cart.length > 0?Data.Cart.length:null}</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
