import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logData, loginchange } from "../Redux/action";

export const Login = () => {
  const [registerdata, setRegisterdata] = useState([]);
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cred =useSelector((state)=>state.reducer.registerdata)
  // console.log(cred)

  useEffect(() => {
    const getLogindata = () => {
      axios
        .get("https://emart-data.onrender.com/registers")
        .then((res) => {
          console.log(res.data);
          setRegisterdata(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getLogindata();

    // const loc = localStorage.getItem("register")
    // setRegisterdata(JSON.parse(loc))
  }, []);

  const logincred = (e) => {
    e.preventDefault();
    // localStorage.setItem("login",JSON.stringify())
    const filterdata = registerdata.filter((ele) => {
      return (
        ele.email === logindata.email && ele.password === logindata.password
      );
    });

    console.log(registerdata, "dbjson");
    console.log(filterdata, "filter");
    if (filterdata.length > 0) {
      // localStorage.setItem("login",JSON.stringify(filterdata))
      dispatch(logData(filterdata));
      dispatch(loginchange());
      navigate("/cart");
    } else {
      alert("login credential are incorrect");
    }

    setLogindata({
      email: "",
      password: "",
    });
  };

  return (
    <>
      {/* <div className="container px-5 py-5 d-flex justify-content-center align-items-center">
        <div className="row col-md-4 ">
          <h4 className="display-6 fw-bolder text-center py-3 fs-3">Login</h4>

          <form onSubmit={(e) => logincred(e)}>
            <div className="form-group py-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                value={logindata.email}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e) =>
                  setLogindata({ ...logindata, email: e.target.value })
                }
              />
            </div>
            <div className="form-group py-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                value={logindata.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) =>
                  setLogindata({ ...logindata, password: e.target.value })
                }
              />
            </div>
          
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <NavLink to="/register" className="btn btn-primary ms-2">
              Register
            </NavLink>
          </form>
        </div>
      </div> */}

      <div className="container my-5">
        <div className="row  justify-content-center">
          <div className="col-md-5">
            <div className="card">
              {/* <div className="card-header">
                <h5 className="card-title">Login</h5>
              </div> */}
              <div className="card-body">
                <form onSubmit={(e) => logincred(e)}>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={logindata.email}
                      onChange={(e) =>
                        setLogindata({ ...logindata, email: e.target.value })
                      }
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={logindata.password}
                      onChange={(e) =>
                        setLogindata({ ...logindata, password: e.target.value })
                      }
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-primary w-100 mt-3">
                    Sign in
                  </button>
                  <div className="d-flex flex-row align-items-center justify-content-center pb-2 mt-2">
                    <p className="mb-0">Don't have an account?</p>
                    <NavLink
                      to="/register"
                      outline
                      className="mx-1"
                      color="danger"
                    >
                      Create a account
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
