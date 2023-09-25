import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import { addStudAcademics  as addStudAcademicsApi} from "../../services/StudentService/postStudentAcademics"
import StudentSideBar from "../SideBar/StudentSideBar";
import StudentHeader from "../Header/StudentHeader";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'

function PostStudentAcademics() {
    const [tenthMarks,setTenthMarks] = useState('')
    const [twelthMarks,setTwelthMarks] = useState('')
    const [diplomaMarks,setDiplomaMarks] = useState('')
    const [graduation,setGraduation] = useState('')
    const [postGraduationmarks,setPostGraduationmarks] = useState('')
    const [graduationProject,setGraduationProject] = useState('')
    const [postGraduationProject,setPostGraduationProject] = useState('')
    const [workExperience,setWorkExperience] = useState('')

    const store = useSelector((store) => store)
    // const isAuthenticated = useSelector((store) => store.auth.status)
   // const store = useSelector((store) => store)

    useEffect(()=> {
      if (!store.student.isAuthenticated) {
        navigate('/');
      }
      
    },[])

      // get the navigation object
    const navigate = useNavigate()

    const addStudentDetAca = async () => {
      if (tenthMarks.length == '') {
        toast.error('Please enter tenthMarks')
      } else if (twelthMarks.length == '') {
        toast.error('Please enter twelthMarks')
      } else if (graduation.length == '') {
        toast.error('Please enter graduation Marks')
      }else if (graduationProject.length == '') {
        toast.error('Please enter graduation Project details')
      }  else {
        try{
        const response = await addStudAcademicsApi(
          tenthMarks,
          twelthMarks,
          diplomaMarks,
          graduation,
          postGraduationmarks,
          graduationProject,
          postGraduationProject,
          workExperience
        );
        // parse the response
        if (response.status === 201) {
          log(response);
          toast.success('Data Successfully added')
          navigate("/student/studentAcademics")
        } else {
          toast.error('Already added')
          
        }}catch(error){
          navigate("/student/studentAcademics")
          toast.error("Data already added")
        }
      }
    }

      const back = async () =>{
    navigate("/student/studentAcademics");
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
            <a href="/home">Home</a>
            <a href="/student/home">Student</a>
            <a href="/student/addstudentacademics">Add Academics</a>
            <span className='gradient__text'>Add Student Academics</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className="gradient__text" style={{ textAlign: "center", margin: 10 }}>Add Student Academics</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>10th Marks</h3></label>
                              <input
                                type='number'
                                className='form-control'
                                placeholder='Enter 10th marks'
                                onChange={(e) => {
                                  setTenthMarks(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>12th Marks</h3></label>
                              <input
                                type='number'
                                className='form-control'
                                placeholder='Enter 12th marks'
                                onChange={(e) => {
                                  setTwelthMarks(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>Diploma Marks</h3></label>
                              <input
                                type='number'
                                className='form-control'
                                placeholder='Enter diploma marks'
                                onChange={(e) => {
                                  setDiplomaMarks(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>Graduation Marks</h3></label>
                              <input
                                type='number'
                                className='form-control'
                                placeholder='Enter graduation marks'
                                onChange={(e) => {
                                  setGraduation(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>PostGraduation Marks</h3></label>
                              <input
                                type='number'
                                className='form-control'
                                placeholder='Enter post graduation marks'
                                onChange={(e) => {
                                  setPostGraduationmarks(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>Graduation Project Name</h3></label>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Enter graduation project name'
                                onChange={(e) => {
                                  setGraduationProject(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>PostGraduation Project Name</h3></label>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Enter postGraduation project name'
                                onChange={(e) => {
                                  setPostGraduationProject(e.target.value)
                                }}
                              />
                            </div>
                            <div className='mb-3'>
                              <label htmlFor=''><h3 style={{color:"white"}}>Work Experience</h3></label>
                              <input
                                type='text'
                                className='form-control'
                                placeholder='Enter work experience'
                                onChange={(e) => {
                                  setWorkExperience(e.target.value)
                                }}
                              />
                            </div>
                          <br />
                          <button onClick={addStudentDetAca} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Add Acadmics
                          </button>
                          &nbsp;
                          <button onClick={back} className="btn btn-warning"
                           style={{
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
              <StudentSideBar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
          );
}

export default PostStudentAcademics;

{/* <div>
<h1 style={{ textAlign: 'center', margin: 10 }}>Student Details</h1>

<div className='row'>
  <div className='col'></div>
  <div className='col'>
    <div className='form'>
      <div className='mb-3'>
        <label htmlFor=''>10th Marks</label>
        <input
          type='number'
          className='form-control'
          onChange={(e) => {
            setTenthMarks(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>12th Marks</label>
        <input
          type='number'
          className='form-control'
          onChange={(e) => {
            setTwelthMarks(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Diploma Marks</label>
        <input
          type='number'
          className='form-control'
          onChange={(e) => {
            setDiplomaMarks(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Graduation Marks</label>
        <input
          type='number'
          className='form-control'
          onChange={(e) => {
            setGraduation(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>PostGraduation Marks</label>
        <input
          type='number'
          className='form-control'
          onChange={(e) => {
            setPostGraduationmarks(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Graduation Project Name</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => {
            setGraduationProject(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>PostGraduation Project Name</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => {
            setPostGraduationProject(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Work Experience</label>
        <input
          type='text'
          className='form-control'
          onChange={(e) => {
            setWorkExperience(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <button onClick={addStudentDetAca} className='btn btn-success'>
          Login
        </button>
      </div>
    </div>
  </div>
  <div className='col'></div>
</div>
</div> */}