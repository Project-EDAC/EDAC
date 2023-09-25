import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import { addAdmTtApi} from "../../services/admin"
import AdminSideBar from "../SideBar/AdminSideBar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'
import { getSubjectList as getSubjectListApi} from '../../services/subject'
import { getFaculties } from '../../services/admin'



function AddTimetable() {
    const [startDate,setStartDate] = useState('')
    const [endDate,setEndDate] = useState('')
    const [subjectId,setSubjectId] = useState('')
    const [subjects, setSubjects] = useState([]);
    const [facultyId,setFacultyId] = useState('')
    const [faculties , setFaculties] = useState([])

      // get the navigation object
      const store = useSelector((store) => store)
    const navigate = useNavigate()

    useEffect(() => {
      log("in Add timetable : " + store.admin.isAuthenticated)
      // Check if user is not authenticated, and navigate if necessary
      if (!store.admin.isAuthenticated) {
        navigate('/');
      }
      else
		{
			loadSubject();
      loadfaculties()
		}
   
    }, []);

    const addAdminTt = async () => {
      if (startDate.length == '') {
        toast.error('Please enter tenth Marks')
      } else if (endDate.length == '') {
        toast.error('Please enter twelth Marks')
      } else if (subjectId.length == 0) {
        toast.error('Please enter graduation Marks')
      } 
      else if (facultyId.length == 0) {
        toast.error('Please enter graduation Marks')
      } 
        else {
        try {
        const response = await addAdmTtApi(
          startDate,
          endDate,
          subjectId,
          facultyId
        );
        // parse the response
        if (response.status === 201) {

          toast.success('Data Successfully added')
        } else {
          toast.error('Already added')
        }
       }catch(error){
        toast.error("Data already added")
      }
    }
  }


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


    const loadfaculties = async () => {

      try{
        const response = await getFaculties()
     

        if (response['status'] === 200) {
          
            setFaculties(response['data'])
          
          } else {
            toast.error('Error while calling get faculty api')
          }
      }
      catch{
        toast.error('No faculties to load')
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
            <span className='gradient__text'>Add Timetable</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Timetable</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className='mb-3'>
                            <label htmlFor=''><h3 style={{color:'white'}}>Start Date</h3></label>
                            <input
                              type='date'
                              className='form-control'
                              placeholder='Enter start date'

                              onChange={(e) => {
                                setStartDate(e.target.value)
                              }}
                            />
                          </div>
                          <div className='mb-3'>
                            <label htmlFor=''><h3 style={{color:'white'}}>End Date</h3></label>
                            <input
                              type='date'
                              className='form-control'
                              placeholder='Enter end date'

                              onChange={(e) => {
                                setEndDate(e.target.value)
                              }}
                            />
                          </div>
                          <div className='mb-3'>
                            <label htmlFor=''><h3 style={{color:'white'}}>Subject</h3></label>
                            <select
                              name="Subject"
                              id="inputSubject"
                              className="form-control"
                              value={subjectId}
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
                          <div className='mb-3'>
                            <label htmlFor=''><h3 style={{color:'white'}}>Faculty</h3></label>
                            <select
                              name="faculty"
                              id="inputSubject"
                              className="form-control"
                              value={facultyId}
                              onChange={(e) => {
                                setFacultyId(e.target.value);
                              }}
                            >
                              <option value="">Select Faculty</option>
                              {faculties.map((faculty) => (
                                <option key={faculty.id} value={faculty.id}>
                                  {faculty.firstName}&nbsp;{faculty.lastName}
                                </option>
                              ))}
                            </select>
                          </div>
                          <br />
                          <button onClick={addAdminTt} className="btn btn-success"
                          style={{
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

export default AddTimetable;

{/* <div>
      <h1 style={{ textAlign: 'center', margin: 10 }}>Syllabus</h1>

      <div className='row'>
        <div className='col'></div>
        <div className='col'>
          <div className='form'>
            <div className='mb-3'>
              <label htmlFor=''>Start Date</label>
              <input
                type='date'
                className='form-control'
                onChange={(e) => {
                  setStartDate(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>End Date</label>
              <input
                type='date'
                className='form-control'
                onChange={(e) => {
                  setEndDate(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Subject Id</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                  setSubjectId(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor=''>Faculty Id</label>
              <input
                type='number'
                className='form-control'
                onChange={(e) => {
                  setFacultyId(e.target.value)
                }}
              />
            </div>
            <div className='mb-3'>
              <button onClick={addAdminTt} className='btn btn-success'>
                Add Timetable
              </button>
            </div>
          </div>
        </div>
        <div className='col'></div>
      </div>
    </div> */}
