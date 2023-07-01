import React, { useState } from "react";
// import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'
// import { register } from "../Redux/action";



export const Register = () => {
  const [rdata, setRdata] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const navigate =useNavigate()
    //  const dispatch = useDispatch()
    //  const regdata = useSelector((state)=>state.reducer.registerdata)
    //  console.log(regdata)


  const registerData = (e) => {
    e.preventDefault();
    if(rdata.name===""|| rdata.lastname=== "" || rdata.email===""|| rdata.password ===""){
      alert("please enter details")
    }
    else{
      // axios
      // .post("http://localhost:3005/registers", rdata)
      // .then((response) => {
      //   console.log(response.data);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });

      // dispatch(register(rdata))
      const regarr = [];
      const loc = localStorage.getItem("register");
      if (loc) {
        regarr.push(...JSON.parse(loc));
      }
      regarr.push(rdata);
      localStorage.setItem("register", JSON.stringify(regarr));
      // console.log(regdata)

      alert("Register Successfully")

      setRdata({
        name: "",
        lastname: "",
        email: "",
        password: "",
      })

      navigate("/login")
    }
    
  };

  return (
    <>
      <div className="container px-5 py-5 d-flex flex-column justify-content-center align-items-center">
      <h4 className='display-6 fw-bolder text-center py-3'>Register</h4>
        <div className="row col-md-4">
          <form onSubmit={registerData}>
            <div className="form-group py-2 d-flex">
              <div className="col-md-6">
                <label htmlFor="Name1">Name</label>
                <input
                value={rdata.name}
                  type="text"
                  className="form-control"
                  id="Name1"
                  placeholder="Enter Name"
                  onChange={(e) =>
                    setRdata({ ...rdata, name: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6 ms-2">
                <label htmlFor="LastName">Last Name</label>
                <input
                  value={rdata.lastname}
                  type="text"
                  className="form-control"
                  id="LastName"
                  placeholder="Enter Last Name"
                  onChange={(e) =>
                    setRdata({ ...rdata, lastname: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-group py-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                value={rdata.email}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) =>
                  setRdata({ ...rdata, email: e.target.value })
                }
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
               value={rdata.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) =>
                  setRdata({ ...rdata, password: e.target.value })
                }
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
