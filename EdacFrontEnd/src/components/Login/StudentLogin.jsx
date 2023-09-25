
import React, { useState } from "react";
import "../Login/style.css"; // Assuming this imports CSS styles
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { login } from '../../features/authSlice';
import { loginUser as loginUserApi } from '../../services/StudentService/studentLogin';
import video from "../Login/video.mov";

function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // get the navigation object
  const navigate = useNavigate();

  // get dispatcher object
  const dispatch = useDispatch();

  const loginUser = async () => {
    if (email.length === 0) {
      toast.error('Please enter email');
    } else if (password.length === 0) {
      toast.error('Please enter password');
    } else {
      // call login api
      try {
        const response = await loginUserApi({email, password},dispatch); // Assuming loginUserApi is correctly defined

        if (response.status === 200) {

          toast.success(`Welcome ${sessionStorage.getItem("firstName")}  ${sessionStorage.getItem("lastName")}  to EDAC`);

          navigate('/student/home');
        } else {
          toast.error('Invalid user name or password');
        }
      } catch (error) {
        console.error('An error occurred:', error);
        toast.error('An error occurred while logging in');
      }
    }
  };

  return (
    <>
      <section className="showcase">
        <div className="video-container">
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className="content">
          <h1>Student Login</h1>
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

export default StudentLogin;

