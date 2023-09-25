// import React, { useEffect, useState } from "react";

// function Student() {
//     useEffect(() => {
//         var firstName = sessionStorage.getItem("firstName"); // Corrected typo in getItem
//         var lastName = sessionStorage.getItem("lastName"); // Corrected typo in getItem
//         setName(firstName + ' ' + lastName); // Moved name assignment inside the useEffect
//     }, []);

//     const [name, setName] = useState(""); // State to store the full name

//     return (
//         <div className="container">
//             <div style={{ marginLeft: "950px" }}>
//                 <strong>{name}</strong>
//             </div>
//         </div>
//     );
// }

// export default Student;



import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { log } from "../../utils/utils";
// import StudentSideBar from "../SideBar/StudentSideBar";
// import StudentHeader from "../Header/StudentHeader";
import FacultyHeader from '../Header/FacultyHeader'
import DownloadFile from "./downloadFile";
import FacDownloadFile from "./downloadFile";
import FacultySideBar from "../SideBar/FacultySideBar";

function Faculty() {

    const store = useSelector((store) => store)
    const navigate = useNavigate()

    useEffect(()=>{
        if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
    },[])

    return ( <>
    <FacultyHeader></FacultyHeader>
    <main className="main-content">
                <div className="container">
                <div className="breadcrumb"style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
                    <a href="/">Home</a>
                    {/* <a href="/admin">Admin</a> */}
                </div>
                <div className="fullwidth-block">
                    <div className="row">
                    <div className="content col-md-8">
                        <div className="post">
                        <div>    
                        <div>
                        <FacDownloadFile></FacDownloadFile>
                        <h5 style={{color:"white"}}><strong>{'Welcome'+' '+sessionStorage.getItem("firstName")}</strong></h5>
                        </div>      
                        </div>
                        </div>
                    </div>
                    <FacultySideBar />
                    </div>
                </div>
                </div>
            </main>
            <Footer />
    </> );
}

export default Faculty;