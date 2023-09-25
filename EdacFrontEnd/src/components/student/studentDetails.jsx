import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { getStudentDetails  as StudentDetailsApi} from "../../services/StudentService/studentService"
import StudentHeader from '../Header/StudentHeader'
import Footer from '../Footer/Footer'
import StudentSideBar from '../SideBar/StudentSideBar'
import { useSelector } from 'react-redux'

function StudentDetails() {
    const [stud,setStud] = useState([])
    const store = useSelector((store) => store)
    useEffect(()=> {
       
        if (!store.student.isAuthenticated) {
          
            navigate('/');
          }
          else{
            log(store.student.isAuthenticated)
            student()
          }
       
    },[])

      // get the navigation object
  const navigate = useNavigate()

    const student = async () => {
     
       try{
        const response = await StudentDetailsApi()

        if (response.status === 200) {
          log(response);
          setStud(response.data) ;
        }
        else{

            toast.error('Data Not Coming')
        }
       }catch{
          toast.error("Student Details Not Available")
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
                        <a href="/student/home">Student</a>
                        <a href="/student/studentdetails">Details</a>
                        <span className='gradient__text'>Student Details</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}> Student Details</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button>
                                        <br /><br /> */}

                                        <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
                                        <tbody>
                                                <tr>
                                                    <td>PRN</td>
                                                    <td>{stud.prn}</td>  
                                                </tr> 
                                                    <tr>
                                                    <td>Batch</td>
                                                    <td>{stud.batch}</td>  
                                                </tr>
                                                <tr>
                                                    <td>DOB</td>
                                                    <td>{stud.dob}</td>
                                                </tr>
                                                <tr>
                                                    <td>Mobile</td>
                                                    <td>{stud.mobileNo}</td>
                                                </tr>
                                                <tr>
                                                    <td>Alternate Mobile</td>
                                                    <td>{stud.altMobileNo}</td>
                                                </tr>
                                                <tr>
                                                    <td>Address</td>
                                                    <td>{stud.address}</td>
                                                </tr>
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

export default StudentDetails;

{/* <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
<div style={{marginBottom :50}}>
<center>
   <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Student Details</b></h1>
</center>
</div>
<div style={{display:'inline-flex'}}>
   <button className='btn btn-info' style={{marginLeft : 910}} onClick={updateDetails}>Edit</button>
   &nbsp;&nbsp;
   <button className='btn btn-success' onClick={addStudDetails}>Add Details</button>
</div>
<table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
   <tbody>
           <tr>
               <td>PRN</td>
               <td>{stud.prn}</td>  
           </tr> 
              <tr>
               <td>Batch</td>
               <td>{stud.batch}</td>  
           </tr>
           <tr>
               <td>DOB</td>
               <td>{stud.dob}</td>
           </tr>
           <tr>
               <td>Mobile</td>
               <td>{stud.mobileNo}</td>
           </tr>
           <tr>
               <td>Alternate Mobile</td>
               <td>{stud.altMobileNo}</td>
           </tr>
           <tr>
               <td>Address</td>
               <td>{stud.address}</td>
           </tr>
   </tbody>
</table>
</div> */}