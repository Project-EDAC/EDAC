import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import { getAttendance  as attendanceApi} from "../../services/StudentService/studAttService"
import StudentSideBar from "../SideBar/StudentSideBar";
import StudentHeader from "../Header/StudentHeader";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'

function StudAttendace() {
    const [attendance,setAttendance] = useState([])
    const store = useSelector((store) => store)

    useEffect(()=> {
        if (!store.student.isAuthenticated) {
            navigate('/');
          }
          else
          {
            studAtt()
          }
        
    },[])

  const navigate = useNavigate()

    const studAtt = async () => {
     
         try{
            const response = await attendanceApi()
            log(response);
            setAttendance(response.data) ;
         }catch{
            toast.error("Attendance are Not Available")
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
                    <a href="/">Home</a>
                    <a href="/student">Student</a>
                    <a href="/student/attendance">Attendance</a>
                    <span className='gradient__text'>Student Academics</span>
                </div>
            </div>

            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="content col-md-8">
                            <div className="post">
                                <div>
                                    <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Attendance List</h1>

                                    {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button>
                                    <br /><br /> */}

                                    <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
                                        <thead>
                                            {/* <th>Subject</th> */}
                                            <th>Date</th>
                                            <th>Status</th>
                                        </thead>
                                        <tbody>
                                        {attendance.map(att => {
                                            console.log('Status:', att.status); // Log the status for debugging
                                            const rowStyle = att.status === 0 ? { backgroundColor: 'red' } : { backgroundColor: 'white' };
                                            log(rowStyle)
                                            return (
                                            <tr key={att.id} style={rowStyle}>
                                                <td>{att.date}</td>
                                                <td>{att.status}</td>
                                            </tr>
                                            );
                                        })}
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

export default StudAttendace;

// {/* <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
//            <div style={{marginBottom :50}}>
//             <center>
//                 <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Syllabus</b></h1>
//             </center>
//             </div>
//             <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
//                 <thead>
//                     {/* <th>Subject</th> */}
//                     <th>Date</th>
//                     <th>Status</th>
//                 </thead>
//                 <tbody>
//                     {
//                         attendance.map(att =>
//                             <tr key = {att.id}>
//                                {/* <td>{att.id}</td>  */}
//                                <td>{att.date}</td> 
//                                <td>{att.status}</td>  
//                             </tr> ) 
//                     }
//                 </tbody>
//             </table>
//         </div> */}