import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { updateStudAca  as updateStudDetailsAcaApi} from "../../services/StudentService/studentService"
import { getStudentAca  as StudentAcademicApi} from "../../services/StudentService/studentService"
import StudentSideBar from "../SideBar/StudentSideBar";
import StudentHeader from "../Header/StudentHeader";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'

function UpdateStudentAcademics() {
    const [stud,setStud] = useState([])
    const [tenthMarks,setTenthMarks] = useState([])
    const [twelthMarks,setTwelthMarks] = useState('')
    const [diplomaMarks,setDiplomaMarks] = useState('')
    const [graduation,setGraduation] = useState('')
    const [postGraduationmarks,setPostGraduationmarks] = useState('')
    const [graduationProject,setGraduationProject] = useState('')
    const [postGraduationProject,setPostGraduationProject] = useState('')
    const [workExperience,setWorkExperience] = useState('')
    const store = useSelector((store) => store)
    
    useEffect(()=> {
      if (!store.student.isAuthenticated) {
        navigate('/');
      }
      else
      {
        try{
          loadFunction()
        }
        catch(error)
        {
          toast.error('No Details to fetch');
        }
        
      } 
    },[])

    const navigate = useNavigate()

    const loadFunction = async () => {
      debugger;
      const response = await StudentAcademicApi(
          tenthMarks,
          twelthMarks,
          diplomaMarks,
          graduation,
          postGraduationmarks,
          graduationProject,
          postGraduationProject,
          workExperience
    )
    if (response['status'] === 200) {
      setTenthMarks(response.data.tenthMarks);
      setTwelthMarks(response.data.twelthMarks)
      setDiplomaMarks(response.data.diplomaMarks)
      setGraduation(response.data.graduation)
      setPostGraduationmarks(response.data.postGraduationmarks)
      setGraduationProject(response.data.graduationProject)
      setPostGraduationProject(response.data.postGraduationProject)
      setWorkExperience(response.data.workExperience)
      } else {
        toast.error('Error while updating details, please try again');
      }
  }

      const updateStudAca = async ()=>{
        debugger;
        if(tenthMarks.length === '')
        {
            toast.error('please enter prn')
        }
        else if(graduation.length === '')
        {
            toast.error('please enter altMobileNo')
        }
        else if(graduationProject.length === '')
        {
            toast.error('please enter address')
        }
        else{
          try{
            const resp = await updateStudDetailsAcaApi( 
              tenthMarks,
              twelthMarks,
              diplomaMarks,
              graduation,
              postGraduationmarks,
              graduationProject,
              postGraduationProject,
              workExperience)
  
              if(resp['status'] == 200)
              {
                log(resp);
                setStud(resp.data) ;
                  navigate('/student/studentAcademics')
                  toast.success('Successfully updated a academic')
}
              else{
                  toast.error('Error while updating a new academic, please try again')
              }
          }catch{
            
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
            <a href="/">Home</a>
            <a href="/student/home">Student</a>
            <a href="/student/updatestudentaca">Edit Academics</a>
            <span className='gradient__text'>Edit Student Academics</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className="gradient__text" style={{ textAlign: "center", margin: 10 }}>Edit Student Academics</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:"white"}}>10th Marks</h3></label>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={tenthMarks}
                                  onChange={(e) => {
                                    setTenthMarks(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:"white"}}>12th Marks</h3></label>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={twelthMarks}
                                  onChange={(e) => {
                                    setTwelthMarks(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:"white"}}>Diploma Marks</h3></label>
                                <input
                                  type='date'
                                  className='form-control'
                                  value={diplomaMarks}
                                  onChange={(e) => {
                                    setDiplomaMarks(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:"white"}}>Graduation Marks</h3></label>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={graduation}
                                  onChange={(e) => {
                                    setGraduation(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:"white"}}>PostGraduation Marks</h3></label>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={postGraduationmarks}
                                  onChange={(e) => {
                                    setPostGraduationmarks(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:"white"}}>Graduation Project</h3></label>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={graduationProject}
                                  onChange={(e) => {
                                    setGraduationProject(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:"white"}}>PostGraduation Project</h3></label>
                                <input
                                  type='text'
                                  className='form-control'
                                  value={postGraduationProject}
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
                                  value={workExperience}
                                  onChange={(e) => {
                                    setWorkExperience(e.target.value)
                                  }}
                                />
                              </div>

                          <br />
                          <button onClick={updateStudAca} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Edit Acadmics
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

export default UpdateStudentAcademics;

{/* <div>
<h1 style={{ textAlign: 'center', margin: 10 }}>Student Academic Details</h1>
<div className='row'>
  <div className='col'></div>
  <div className='col'>
    <div className='form'>
      <div className='mb-3'>
        <label htmlFor=''>10th Marks</label>
        <input
          type='text'
          className='form-control'
          value={tenthMarks}
          onChange={(e) => {
            setTenthMarks(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>12th Marks</label>
        <input
          type='text'
          className='form-control'
          value={twelthMarks}
          onChange={(e) => {
            setTwelthMarks(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Diploma Marks</label>
        <input
          type='date'
          className='form-control'
          value={diplomaMarks}
          onChange={(e) => {
            setDiplomaMarks(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Graduation Marks</label>
        <input
          type='text'
          className='form-control'
          value={graduation}
          onChange={(e) => {
            setGraduation(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>PostGraduation Marks</label>
        <input
          type='text'
          className='form-control'
          value={postGraduationmarks}
          onChange={(e) => {
            setPostGraduationmarks(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>Graduation Marks</label>
        <input
          type='text'
          className='form-control'
          value={graduationProject}
          onChange={(e) => {
            setGraduationProject(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor=''>PostGraduation Marks</label>
        <input
          type='text'
          className='form-control'
          value={postGraduationProject}
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
          value={workExperience}
          onChange={(e) => {
            setWorkExperience(e.target.value)
          }}
        />
      </div>
      <div className='mb-3'>
        <button onClick={updateStudAca} className='btn btn-warning'>
          Update
        </button>
      </div>
    </div>
  </div>
  <div className='col'></div>
</div>
</div> */}