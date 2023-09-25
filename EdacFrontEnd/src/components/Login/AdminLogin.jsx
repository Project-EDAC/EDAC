import React from "react";
import "../Login/style.css"; // Assuming this imports CSS styles
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { log } from '../../utils/utils'
// import { login } from '../../features/authSlice'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { loginAdminApi } from '../../services/admin'


import video from "../Login/video.mov";

function AdminLogin() {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const store = useSelector((store) => store)
  // get the navigation object
  const navigate = useNavigate()

  // get dispatcher object
  const dispatch = useDispatch()

  debugger
  const loginUser = async () => {
    if (email.length == '') {
      toast.error('Please enter email')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else {
      // call register api
      log("in AdminLogin.jsx calling loginAdminApi()")
      const response = await loginAdminApi({email, password},dispatch)
      log("after login : " + store.admin.isAuthenticated)
      // parse the response
      if (response['status'] === 200) {
        
        // const { token, firstName, lastName } = response['data']
        

        // update global store's authSlice with status = true
        //dispatch(login())

       // log("in login" + store.auth.auth.status)

        toast.success(`Welcome ${sessionStorage.getItem("firstName")} ${sessionStorage.getItem("lastName")} to EDAC`)

        // go back to login
        navigate('/admin')
      } else {
        toast.error('Invalid user name or password')
      }
    }
  }







  return (
    <>
      <section className="showcase">
        <div className="video-container">
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className="content" style={{}}>
          <h1>Admin Login</h1>
          <div className='mb-2'>
          <label htmlFor=''>Email</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                placeholder="Email"
              />
                </div>
                <div className='mb-2'>
                <label htmlFor=''>Password</label>
              <input
                type='password'
                className='form-control'
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder="Password"
              />
                </div>
                <button className='btn btn-success' onClick={loginUser} style={{
                                    padding: "10px 30px",
                                    color: "#fff",
                                    borderRadius: "5px",
                                    border: "solid #fff 1px",
                                    marginTop: "25px",
                                    opacity: 0.7,
                                  }} >
                    Login
                </button>
                &nbsp;
                <a href="/" className="btn" style={{
                                                    display: "inline-block",
                                                    padding: "10px 30px",
                                                    background: "var(--primary-color)",
                                                    color: "#fff",
                                                    borderRadius: "5px",
                                                    border: "solid #fff 1px",
                                                    marginTop: "25px",
                                                    opacity: 0.7,
                                                  }}>
                  Home
                </a>
        </div>
      </section>
    </>
  );
}

export default AdminLogin;
