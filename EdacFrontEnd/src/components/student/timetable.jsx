import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { getTimetable  as TimetableApi} from "../../services/StudentService/timetableService"
import StudentSideBar from "../SideBar/StudentSideBar";
import StudentHeader from "../Header/StudentHeader";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'

function FacTimetable() {
    const [timetable,setTimetable] = useState([])
    const store = useSelector((store) => store)

    useEffect(()=> {
        if (!store.student.isAuthenticated) {
            navigate('/');
          }
        timetables()
    },[])

  const navigate = useNavigate()

    const timetables = async () => {
     
          try{
            const response = await TimetableApi()
          log(response);
          setTimetable(response.data) ;
          }catch{
            toast.error("Timetable Not Available")
          }
      }

    return (
        <div className="site-content">
        <StudentHeader />

        <main className="main-content">
            <div className="container">
                <div className="breadcrumb"style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
                    <a href="/student/home">Student</a>
                    <a href="/student/tiemtable">Timetable</a>
                    <span className='gradient__text'>Timetable</span>
                </div>
            </div>

            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="content col-md-8">
                            <div className="post">
                                <div>
                                    <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Timetable</h1>

                                    {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button>
                                    <br /><br /> */}

                                    <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
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
                        <StudentSideBar />
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
        );
}

export default FacTimetable;

{/* <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
         <div style={{marginBottom :50}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Timetable</b></h1>
            </center>
            </div>
            <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
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
        </div> */}