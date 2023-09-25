import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { addFacAcademics  as addFacAcademicsApi} from "../../services/Faculty/postFacAcademics"
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FacultyHeader from '../Header/FacultyHeader'
function PostFacultyAcademics() {
    const [tenthMarks,setTenthMarks] = useState('')
    const [twelthMarks,setTwelthMarks] = useState('')
    const [diplomaMarks,setDiplomaMarks] = useState('')
    const [graduation,setGraduation] = useState('')
    const [postGraduationmarks,setPostGraduationmarks] = useState('')
    const [workExperience,setWorkExperience] = useState('')
    const store = useSelector((store) => store)
      // get the navigation object
    const navigate = useNavigate()

    useEffect(()=>{
      if (!store.faculty.isAuthenticated) {
    navigate('/');
  }
  },[])
    const addFacultyDetAca = async () => {
      if (tenthMarks.length == '') {
        toast.error('Please enter tenth Marks')
      } else if (twelthMarks.length == '') {
        toast.error('Please enter twelth Marks')
      } else if (graduation.length == '') {
        toast.error('Please enter graduation Marks')
      } 
        else {
        try {
        const response = await addFacAcademicsApi(
          tenthMarks,
          twelthMarks,
          diplomaMarks,
          graduation,
          postGraduationmarks,
          workExperience
        );
        // parse the response
        if (response.status === 201) {

          toast.success('Data Successfully added')
        } else {
          toast.error('Already added')
        }
       }catch(error){
        navigate("/faculty/home")
        toast.error("Data already added")
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
              <span className='gradient__text'>Add Faculty Academics</span>
            </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className="gradient__text" style={{ textAlign: "center", margin: 10 }}>Add Faculty Academics</h1>

                    <div className="row">
                      <div className="col">
                        <div className='form'>
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
                          <div className='mb-3'>
                            <button onClick={addFacultyDetAca} className='btn btn-success'
                            style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>
                              Add Academics
                            </button>
                          </div>
                        </div>
                      </div>
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

export default PostFacultyAcademics;

{/* <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Faculty Details</h1>

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
              <button onClick={addFacultyDetAca} className='btn btn-success'>
                Login
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div> */}