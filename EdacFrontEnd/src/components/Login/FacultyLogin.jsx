import React, { useState } from "react";
import "../Login/style.css"; // Assuming this imports CSS styles
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { login } from '../../features/authSlice';
import { loginUser as loginUserApi } from '../../services/Faculty/facultyLoginService';

import video from "../Login/video.mov";
import { createUrl, log } from '../../utils/utils';

function FacultyLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the navigation object
  const navigate = useNavigate()

  // get dispatcher object
  const dispatch = useDispatch()

  const loginUser = async () => {
    debugger;
    if (email.length == '') {
      toast.error('Please enter email')
    } else if (password.length == '') {
      toast.error('Please enter password')
    } else {
      // call register api
      const response = await loginUserApi({email, password},dispatch)
      log(response);
      // parse the response
      if (response.status === 200) {
        // parse the response's data and extract the token
        // const { id, firstName,lastName,email } = response['data']

        // store the token for making other apis
        //sessionStorage['token'] = token
        // sessionStorage['id'] = id
        // sessionStorage['firstName'] = firstName
        // sessionStorage['lastName'] = lastName
        // sessionStorage['email'] = email

        // update global store's authSlice with status = true
       // dispatch(login())

        toast.success(`Welcome ${sessionStorage.firstName} to EDAC`)

        // go back to login
        navigate('/faculty/home')
        // navigate('/faculty/syllabus')
        // navigate('/faculty/timetable')
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
        <h1>Faculty Login</h1>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
                <button className='btn btn-success' onClick={loginUser}
                style={{
                  padding: "10px 30px",
                  color: "#fff",
                  borderRadius: "5px",
                  border: "solid #fff 1px",
                  marginTop: "25px",
                  opacity: 0.7,
                }}>
                    Sign In
                </button>
                &nbsp;
                <a href="/" className="btn"
                style={{
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

export default FacultyLogin;
