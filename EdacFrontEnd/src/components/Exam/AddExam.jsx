import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { addExam as addExamApi } from "../../services/exam";
import { getSubjectList as getSubjectListApi } from "../../services/subject";
import AdminSideBar from "../SideBar/AdminSideBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { log } from "../../utils/utils";

function AddExam() {
  const [examDescription, setExamDesc] = useState("");
  const [examDate, setDate] = useState("");
  const [subjectid, setSubjectId] = useState(0);
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadSubject();
  }, []);

  const addExam = async () => {
    if (examDescription === "") {
      toast.error("Please enter exam information");
    } else if (examDate === "") {
      toast.error("Please select a date");
    } else {
      try {
        const response = await addExamApi(examDescription, examDate, subjectid);
        log(response)
        if (response['status'] == 201) {
          toast.success("Successfully added a new exam");
          navigate("/admin/exam");
        } else {
          toast.error("Failed to add exam");
        }
      } catch (error) {
        toast.error("An error occurred while adding the exam");
      }
    }
  };

  const loadSubject = async () => {
    try {
      const response = await getSubjectListApi();
      if (response) {
        setSubjects(response);
      } else {
        toast.error("Error while loading subjects");
      }
    } catch (error) {
      toast.error("An error occurred while loading subjects");
    }
  };

  const back = async () =>{
    navigate("/admin/exam");
  }

  return (
    <>
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
            <a href="/admin/exam">Exam</a>
            <span className='gradient__text'>Add Exam</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1  className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Exam</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                          <div className="mb-2">
                            <label htmlFor=""><h3 style={{color:"white"}}>Exam Description</h3></label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => {
                                setExamDesc(e.target.value);
                              }}
                            />
                          </div>
                          <div className="mb-2">
                            <label htmlFor=""><h3 style={{color:"white"}}>Date</h3></label>
                            <input
                              type="date"
                              className="form-control"
                              onChange={(e) => {
                                setDate(e.target.value);
                              }}
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="inputSubject" className="control-label">
                            <h3 style={{color:"white"}}>Subject :</h3>
                            </label>
                            <select
                              name="Subject"
                              id="inputSubject"
                              className="form-control"
                              value={subjectid}
                              onChange={(e) => {
                                setSubjectId(e.target.value);
                              }}
                            >
                              <option value="">Select Subject</option>
                              {subjects.map((subject) => (
                                <option key={subject.id} value={subject.id}>
                                  {subject.name}
                                </option>
                              ))}
                            </select>
                          </div>

                          <br />
                          <button onClick={addExam} className="btn btn-success"style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>
                            Add Exam
                          </button>
                          &nbsp;
                          <button onClick={back} className="btn btn-warning"style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>
                            Back 
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <AdminSideBar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AddExam;
