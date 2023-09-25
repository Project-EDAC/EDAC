import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { log } from '../../utils/utils'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import StudentSideBar from '../SideBar/StudentSideBar';
import StudentHeader from '../Header/StudentHeader';
import Footer from '../Footer/Footer';
import { useSelector } from 'react-redux'

const FacUploadFile = () => {
    const navigate = useNavigate();
    const [imageFile, setImageFile] = useState(null);
    const store = useSelector((store) => store)
    var facId = sessionStorage.getItem('id');
    const longStudId = parseInt(facId, 10);
    useEffect(()=> {
      if (!store.student.isAuthenticated) {
        navigate('/');
      }
    },[])
    const uploadImage = () => {
        if (!imageFile) {
            toast.error('Please select an image to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('imageFile', imageFile);
    
        axios.post(`http://localhost:7070/student/images/${facId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(function (response) {
            toast.success('Image uploaded successfully!');
            setImageFile(null); // Reset the image file state
        })
        .catch(function (error) {
            log(error);
            toast.error('Error uploading image.');
        });
    };

    const back = async () =>{
        navigate("/student/home");
        }

    return (
        <>
        <StudentHeader />
        <main className="main-content">
          <div className="container">
            <div className="breadcrumb"style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
              <a href="/">Home</a>
              <a href="/student/home">Student</a>
              <a href="/student/image">Add Passport Photo</a>
              <span className='gradient__text'>Add Passport Photo</span>
            </div>
            <div className="fullwidth-block">
              <div className="row">
                <div className="content col-md-8">
                  <div className="post">
                    <div>
                      <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Passport Photo</h1>
  
                      <div className="row">
                        <div className="col">
                          <div className="form">
                          <div className="card mb-3">
                     <div className="card-body">
                       <h5 className="card-title">Add Profile Photo</h5>
                            <div className="input-group">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        style={{color:'blue'}}
                                        accept="image/*"
                                         onChange={(e) => setImageFile(e.target.files[0])}
                                    />
                                    <button
                                        className="btn btn-outline-success btn-sm" onClick={uploadImage}>
                                        Upload Image
                                    </button>
                            </div>

                            </div>
                        </div>
                            <br />
                            <button onClick={back} className="btn btn-warning">
                              Back 
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <StudentSideBar />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
};

export default FacUploadFile;

{/* <>
<div className="card mb-3">
    <div className="card-body">
        <h5 className="card-title">Add Profile Photo</h5>
                            <div className="input-group">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        style={{color:'blue'}}
                                        accept="image/*"
                                         onChange={(e) => setImageFile(e.target.files[0])}
                                    />
                                    <button
                                        className="btn btn-outline-success btn-sm" onClick={uploadImage}>
                                        Upload Image
                                    </button>
                            </div>

    </div>
</div>
<button className="btn btn-outline-danger btn-sm">
    Logout
</button>
</> */}