import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logData, loginchange } from "../Redux/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const [registerdata, setRegisterdata] = useState([]);
  const [logindata, setLogindata] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  }, []);

  const logincred = (e) => {
    e.preventDefault();
    const filterdata = registerdata.filter((ele) => {
      return (
        ele.email === logindata.email && ele.password === logindata.password
      );
    });

    console.log(filterdata,"filterdata")

    if (filterdata.length > 0) {
    
      dispatch(logData(filterdata));
      dispatch(loginchange());
      navigate("/cart");
      toast.success('Login successful!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.error('Credentials are incorrect!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }

    setLogindata({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="container my-5">
        <div className="row  justify-content-center">
          <div className="col-md-5">
            <div className="card">
              <div className="card-body">
                <form onSubmit={(e) => logincred(e)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
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
                    <label htmlFor="exampleInputPassword1" className="form-label">
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
                      Create an account
                    </NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
      </div>
    </>
  );
};
