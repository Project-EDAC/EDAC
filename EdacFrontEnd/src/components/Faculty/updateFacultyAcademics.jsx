import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { updateFacAca  as updateFacDetailsAcaApi} from "../../services/Faculty/facultyService"
import { getFacultyAca  as FacultyAcademicApi} from "../../services/Faculty/facultyService"
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FacultyHeader from '../Header/FacultyHeader'

function UpdateFacultyAcademics() {
    const [stud,setStud] = useState([])
    const [tenthMarks,setTenthMarks] = useState('')
    const [twelthMarks,setTwelthMarks] = useState('')
    const [diplomaMarks,setDiplomaMarks] = useState('')
    const [graduation,setGraduation] = useState('')
    const [postGraduationmarks,setPostGraduationmarks] = useState('')
    const [workExperience,setWorkExperience] = useState('')
    const store = useSelector((store) => store)
    useEffect(()=> {
      if (!store.faculty.isAuthenticated) {
    navigate('/');
  }
  else{
    loadFunction()
  }   
  },[])

    const navigate = useNavigate()

    const loadFunction = async () => {
      debugger;
      try{
        const response = await FacultyAcademicApi(
          tenthMarks,
          twelthMarks,
          diplomaMarks,
          graduation,
          postGraduationmarks,
          workExperience
    )
    log(response.data)
    log(response.status)
    if (response['status'] === 200) {
      setTenthMarks(response.data.tenthMarks);
      setTwelthMarks(response.data.twelthMarks)
      setDiplomaMarks(response.data.diplomaMarks)
      setGraduation(response.data.graduation)
      setPostGraduationmarks(response.data.postGraduationmarks)
      setWorkExperience(response.data.workExperience)
        toast.success('Successfully updated');
      } else {
        toast.error('Error while updating Academics, please try again');
      }
      }catch{

      }
  }

      const updateFacAcademic = async () => {
        debugger;
        if(tenthMarks.length === '')
        {
            toast.error('please enter 10th marks')
        }
        else if(graduation.length === '')
        {
            toast.error('please enter graduation')
        }
        else{
          try{
            const resp = await updateFacDetailsAcaApi( 
              tenthMarks,
              twelthMarks,
              diplomaMarks,
              graduation,
              postGraduationmarks,
              workExperience)
  
              if(resp['status'] == 200)
              {
                log(resp);
                setStud(resp.data) ;
                  toast.success('Successfully updated a academic')
                 // navigate('/student/studentAcademics')
              }
              else{
                  toast.error('Error while updating a new academic, please try again')
              }
          }catch{
            
          }
        }
       
    }
    
    return (
      <>
      <FacultyHeader />
      <main className="main-content">
        <div className="container">
          <div className="breadcrumb"style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
            <a href="/faculty/home">Home</a>
            <a href="/faculty/facultydetails">Faculty</a>
            <span className='gradient__text'>Edit Academics</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                <div>
                  <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Edit Faculty Academic Details</h1>
                  <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                      <div className='form'>
                        <div className='mb-3'>
                          <label htmlFor=''><h3 style={{color:"white"}}>10th Marks</h3></label>
                          <input
                            type='number'
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
                            type='number'
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
                            type='number'
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
                            type='number'
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
                            type='number'
                            className='form-control'
                            value={postGraduationmarks}
                            onChange={(e) => {
                              setPostGraduationmarks(e.target.value)
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
                        <div className='mb-3'>
                          <button onClick={updateFacAcademic} className='btn btn-warning'
                          style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className='col'></div>
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
    </>
        );
}

export default UpdateFacultyAcademics;

{/* <div>
<h1 style={{ textAlign: 'center', margin: 10 }}>Faculty Academic Details</h1>
<div className='row'>
  <div className='col'></div>
  <div className='col'>
    <div className='form'>
      <div className='mb-3'>
        <label htmlFor=''>10th Marks</label>
        <input
          type='number'
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
          type='number'
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
          type='number'
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
          type='number'
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
          type='number'
          className='form-control'
          value={postGraduationmarks}
          onChange={(e) => {
            setPostGraduationmarks(e.target.value)
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
        <button onClick={updateFacAcademic} className='btn btn-warning'>
          Update
        </button>
      </div>
    </div>
  </div>
  <div className='col'></div>
</div>
</div> */}


