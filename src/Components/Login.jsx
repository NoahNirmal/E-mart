import axios from 'axios'
import React ,{useEffect,useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { loginchange } from '../Redux/action'

export const Login = () => {
  const [registerdata, setRegisterdata] = useState([])
  const [logindata, setlogindata] = useState({
    email:"",
    password:""
  })

const dispatch = useDispatch()
const navigate =useNavigate()
  // const cred =useSelector((state)=>state.reducer.registerdata)
  // console.log(cred)

  useEffect(() => {

    const getLogindata=()=>{
      axios.get("http://localhost:3005/registers").then((res)=>{
        setRegisterdata(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
    getLogindata()
  
   
  }, [])

  const logincred=(e)=>{
    e.preventDefault()
    const filterdata= registerdata.filter((ele)=>{
      console.log(ele)
      return ele.email === logindata.email && ele.password === logindata.password
    })
   console.log(registerdata,"dbjson")
    console.log(filterdata,"filter")
    if(filterdata.length>0){
      dispatch(loginchange())
      navigate("/cart")
      
    }
    else{
      alert("login credential are incorrect")
    }
  }

  
  return (
    
    <>
     <div className="container px-5 py-5 d-flex justify-content-center align-items-center">
        <div className="row col-md-4 ">
          <form onSubmit={(e)=>logincred(e)}>
            <div className="form-group py-2">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                onChange={(e)=>setlogindata({...logindata,email:e.target.value})}
              />
            
            </div>
            <div className="form-group py-2">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e)=>setlogindata({...logindata,password:e.target.value})}

              />
            </div>
            {/* <div className="form-check py-2">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <NavLink  to="/register" className="btn btn-primary ms-2">
              Register
            </NavLink>
          </form>
        </div>
      </div>
    </>
  )
}
