import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { log } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { getExamList as getExamListApi } from "../../services/exam";
import "../style.css";
import Header from "../Header/Header";
import AdminSideBar from "../SideBar/AdminSideBar";
import Footer from "../Footer/Footer";

function Exam() {
    const [exams, setExams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadExams();
    }, []);

    const loadExams = async () => {
        try {
            const response = await getExamListApi();
            if (response.status === 200) {
                setExams(response.data); // Assuming the response has a "data" property
                log(response.data);
            } else {
                toast.error('Error while loading exams');
            }
        } catch (error) {
            toast.error('An error occurred while loading exams');
        }
    };

    const addExam = () => {
        navigate('/admin/exam/addexam');
    };

    return (
        <div className="site-content">
            <Header />

            <main className="main-content">
                <div className="container">
                    <div className="breadcrumb"style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
                        <a href="/">Home</a>
                        <a href="/admin">Admin</a>
                        <span className='gradient__text'>Exam</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}> Exams List</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button>
                                        <br /><br /> */}

                                        <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
                                            <thead>
                                                <tr>
                                                    <th>Exam Description</th>
                                                    <th>Exam Date</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {exams.map((exam, index) => (
                                                    <tr key={index}>
                                                        <td>{exam.examDescription}</td>
                                                        <td>{exam.examDate}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <AdminSideBar />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default Exam;
