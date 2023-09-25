import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import {addSyllabusApi} from "../../services/admin"
import AdminSideBar from "../SideBar/AdminSideBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'

function AddSyllabus() {
    const [subject,setSubject] = useState('')
    const [topics,setTopics] = useState('')
    const [duration,setDuration] = useState('')

      // get the navigation object
    const store = useSelector((store) => store)
    const navigate = useNavigate()

    useEffect(() => {
      log("in Add syllabus : " + store.admin.isAuthenticated)
      // Check if user is not authenticated, and navigate if necessary
      if (!store.admin.isAuthenticated) {
        navigate('/');
      }
   
    }, []);

    const addFacultyDetAca = async () => {
      if (subject.length == '') {
        toast.error('Please enter tenth Marks')
      } else if (topics.length == '') {
        toast.error('Please enter twelth Marks')
      } else if (duration.length == '') {
        toast.error('Please enter graduation Marks')
      } 
        else {
        try {
        const response = await addSyllabusApi(
            subject,
            topics,
            duration,
        );
        // parse the response
        if (response.status === 201) {

          toast.success('Data Successfully added')
        } else {
          toast.error('Data Already added')
        }
       }catch(error){
        toast.error("Data already added")
      }
    }
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
            {/* <a href="/admin/exam">Exam</a> */}
            <span className='gradient__text'>Add Syllabus</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Syllabus</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className='mb-3' style={{ display: 'inline-flex' }}>
                          
                                <select
                                  name='status'
                                  id='status'
                                  onChange={(e) => {
                                    setSubject(e.target.value);
                                  }}
                                  value={subject}
                                >
                                  <option value=''>select</option>
                                  <option value='Operating System'>Operating System</option>
                                  <option value='DBMS'>DBMS</option>
                                  <option value='Core Java'>Core Java</option>
                                  <option value='.net'>.net</option>
                                  <option value='Data Structure'>Data Structure</option>
                                  <option value='Data Structure'>Advance Java</option>
                                </select>
                              </div>
                              <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:'white'}}>Topics</h3></label>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='eg. collection, generics'
                                  onChange={(e) => {
                                      setTopics(e.target.value)
                                  }}
                                />
                              </div>
                              <div className='mb-3'>
                                <label htmlFor=''><h3 style={{color:'white'}}>Duration</h3></label>
                                <input
                                  type='text'
                                  className='form-control'
                                  placeholder='eg.180hrs'
                                  onChange={(e) => {
                                      setDuration(e.target.value)
                                  }}
                                />
                              </div>

                          <br />
                          <button onClick={addFacultyDetAca} className="btn btn-success"
                          style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Add Syllabus
                          </button>
                          &nbsp;
                          {/* <button onClick={back} className="btn btn-warning">
                            Back 
                          </button> */}
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

export default AddSyllabus;

{/* <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Syllabus</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
          <div className='mb-3' style={{ display: 'inline-flex' }}>
              <select
                name='status'
                id='status'
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                value={subject}
              >
                <option value=''>select</option>
                <option value='Operating System'>Operating System</option>
                <option value='DBMS'>DBMS</option>
                <option value='Core Java'>Core Java</option>
                <option value='.net'>.net</option>
                <option value='Data Structure'>Data Structure</option>
              </select>
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Topics</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                    setTopics(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Duration</label>
              <input
                type='text'
                className='form-control'
                onChange={(e) => {
                    setDuration(e.target.value)
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
