import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { getTimetable  as TimetableApi} from "../../services/Faculty/timetableService"
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import FacultyHeader from '../Header/FacultyHeader'
function Timetable() {
    const [timetable,setTimetable] = useState([])
    const store = useSelector((store) => store)
    useEffect(()=> {
        if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
    else{
        timetables()
    }   
    },[])

  const navigate = useNavigate()

    const timetables = async () => {
     
          try{
            const response = await TimetableApi()
          log(response);
          setTimetable(response.data) ;
          }catch{

          }
      }

    return (
        <div className="site-content">
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
                    <span className='gradient__text'>Timetable</span>
                </div>
            </div>

            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="content col-md-8">
                            <div className="post">
                                <div>
                                    <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}> Timetable</h1>

                                    {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button>
                                    <br /><br /> */}

                                    <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent", color:"white" }}>
                                        <thead>
                                            <th>Subject Name</th>
                                            <th>Faculty Name</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                        </thead>
                                        <tbody>
                                            {
                                                timetable.map(tt =>
                                                    <tr>
                                                        <td>{tt.subjectName}</td> 
                                                        <td>{tt.facultyName}</td> 
                                                        <td>{tt.startDate}</td> 
                                                        <td>{tt.endDate}</td>  
                                                    </tr> ) 
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <FacultySideBar />
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
    
        );
}

export default Timetable;