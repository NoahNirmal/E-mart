import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux'
// import { register } from "../Redux/action";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Register = () => {
  const [rdata, setRdata] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });
  const [existingdata, setExistingdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://emart-data.onrender.com/registers")
      .then((response) => {
        // console.log(response.data)
        setExistingdata(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const navigate = useNavigate();
  //  const dispatch = useDispatch()
  //  const regdata = useSelector((state)=>state.reducer.registerdata)
  //  console.log(regdata)

  // const registerData = (e) => {
  //   e.preventDefault();
  //   if(rdata.username===""|| rdata.fullname=== "" || rdata.email===""|| rdata.password ===""){
  //     alert("please enter details")
  //   }
  //   else{
  //     const isDataExisting  = existingdata.some((ele)=>{
  //       return ele.email === rdata.email
  //     })

  //     if(isDataExisting){
  //       alert("Data already exists")
  //       setRdata({
  //         username: "",
  //         fullname: "",
  //         email: "",
  //         password: "",
  //       })
  //     }

  //     else{
  //       axios
  //       .post("https://emart-data.onrender.com/registers", rdata)
  //       .then((response) => {
  //         console.log(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //       // alert("Register Successfully")
  //       toast.success('Register Successfully!', {
  //         position: toast.POSITION.TOP_CENTER,
  //         autoClose: 1000,
  //         hideProgressBar: true,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: 'light',
  //       });

  //       setRdata({
  //         username: "",
  //         fullname: "",
  //         email: "",
  //         password: "",
  //       })

  //       navigate("/login")

  //     }

  //     // // dispatch(register(rdata))
  //     // const regarr = [];
  //     // const loc = localStorage.getItem("register");
  //     // if (loc) {
  //     //   regarr.push(...JSON.parse(loc));
  //     // }
  //     // regarr.push(rdata);
  //     // localStorage.setItem("register", JSON.stringify(regarr));
  //     // console.log(regdata)

  //   }

  // };
  const registerData = async (e) => {
    e.preventDefault();
    if (
      rdata.username === "" ||
      rdata.fullname === "" ||
      rdata.email === "" ||
      rdata.password === ""
    ) {
      alert("Please enter all details");
    } else {
      const isDataExisting = existingdata.some((ele) => {
        return ele.email === rdata.email;
      });

      if (isDataExisting) {
        alert("Data already exists");
        setRdata({
          username: "",
          fullname: "",
          email: "",
          password: "",
        });
      } else {
        try {
          const response = await axios.post(
            "https://emart-data.onrender.com/registers",
            rdata
          );
          console.log(response.data);

          // Fetch updated data after successful registration
          // const res = await axios.get("https://emart-data.onrender.com/registers");
          // console.log(res.data);
          // setExistingdata(res.data);

          // toast.success("Register Successfully!", {
          //   position: toast.POSITION.TOP_CENTER,
          //   autoClose: 1000,
          //   hideProgressBar: true,
          //   closeOnClick: true,
          //   pauseOnHover: true,
          //   draggable: true,
          //   progress: undefined,
          //   theme: "light",
          // });
          toast.success("Register Successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          //  alert("Register Successfully!")
          navigate("/login"); // Navigate to Login component

          setRdata({
            username: "",
            fullname: "",
            email: "",
            password: "",
          });
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  return (
    <>
      {/* <div className="container px-5 py-5 d-flex flex-column justify-content-center align-items-center">
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
                <label htmlFor="fullname">Last Name</label>
                <input
                  value={rdata.fullname}
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="Enter Last Name"
                  onChange={(e) =>
                    setRdata({ ...rdata, fullname: e.target.value })
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
      </div> */}

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title  fw-bold">Join our Community!</h5>
              </div>
              <div className="card-body">
                <form onSubmit={registerData}>
                  <div className="mb-3 row">
                    <div className="col-md-6">
                      <label htmlFor="Name1">Username</label>
                      <input
                        value={rdata.username}
                        type="text"
                        className="form-control"
                        id="Name1"
                        placeholder="Enter username"
                        onChange={(e) =>
                          setRdata({ ...rdata, username: e.target.value })
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="fullname">Full Name</label>
                      <input
                        value={rdata.fullname}
                        type="text"
                        className="form-control"
                        id="fullname"
                        placeholder="Enter Full Name"
                        onChange={(e) =>
                          setRdata({ ...rdata, fullname: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="mb-3">
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
                  <div className="mb-3">
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
                  <button type="submit" className="btn btn-dark w-100 mt-3">
                    Register
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </div>

    
    </>
  );
};
