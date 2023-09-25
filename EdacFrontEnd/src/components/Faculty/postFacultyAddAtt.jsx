import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { addStudAtt  as addStudAttApi} from "../../services/Faculty/postFacultyAddAttService"
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FacultyHeader from '../Header/FacultyHeader'
function PostAddAttByFaculty() {
    const [studentId,setStudentId] = useState('')
    const [status,setStatus] = useState('')
    const [date,setDate] = useState('')
    const store = useSelector((store) => store)

      // get the navigation object
  const navigate = useNavigate()

  useEffect(()=>{
    if (!store.faculty.isAuthenticated) {
  navigate('/');
}
},[])
    const addFacultyDet = async () => {
      debugger;
      if (studentId.length == 0) {
        toast.error('Please enter Student Id')
      } else if (date.length == '') {
        toast.error('Please enter date')
       } else
     try {
        const response = await addStudAttApi(
          studentId,
          status,
          date,
          );
        if (response.status === 201) {
          log(response);
          toast.success('Data Successfully added')
        }
        else{
            toast.error('Data Not Available')
        }}catch(error){
          navigate("/faculty/facultydetails")
          toast.error("Data already added")
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
            <span className='gradient__text'>Add Student Attendance</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                <div>
                  <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Add Student Attendance</h1>

                  <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                      <div className='form'>
                        <div className='mb-3'>
                          <label htmlFor=''><h3 style={{color:"white"}}>Student Id</h3></label>
                          <input
                            type='text'
                            className='form-control'
                            placeholder='Enter student Id'

                            onChange={(e) => {
                              setStudentId(e.target.value)
                            }}
                          />
                        </div>
                        <div className='mb-3'>
                          <label htmlFor=''><h3 style={{color:"white"}}>Date</h3></label>
                          <input
                            type='date'
                            className='form-control'
                            placeholder='Enter date'

                            onChange={(e) => {
                                setDate(e.target.value)
                            }}
                          />
                        </div>
                        <div className='mb-3' style={{ display: 'inline-flex' }}>
                          <select
                            name='status'
                            id='status'
                            onChange={(e) => {
                              setStatus(e.target.value);
                            }}
                            value={status}
                          >
                            <option value=''>select</option>
                            <option value='1'>PRESENT</option>
                            <option value='0'>ABSENT</option>
                          </select>
                        </div>
                        <div className='mb-3'>
                          <button onClick={addFacultyDet} className='btn btn-success'
                          style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Add Details
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

export default PostAddAttByFaculty;

{/* <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Add Attendance</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Student Id</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                  setStudentId(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Date</label>
              <input
                type='date'
                className='form-control'
                onChange={(e) => {
                    setDate(e.target.value)
                }}
              />
            </div>
            <div className='mb-3' style={{ display: 'inline-flex' }}>
              <select
                name='status'
                id='status'
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
                value={status}
              >
                <option value=''>select</option>
                <option value='1'>PRESENT</option>
                <option value='0'>ABSENT</option>
              </select>
            </div>
            <div className='mb-3'>
              <button onClick={addFacultyDet} className='btn btn-success'>
                Add Details
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div> */}