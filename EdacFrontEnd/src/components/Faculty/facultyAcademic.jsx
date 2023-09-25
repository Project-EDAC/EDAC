import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { getFacultyAcademics  as FacultyAcademicApi} from "../../services/Faculty/facultyAcademicsService"
import FacultySideBar from "../SideBar/FacultySideBar"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'
import FacultyHeader from '../Header/FacultyHeader'
function FacultyAcademic() {
    const [faculty,setFaculty] = useState([])
    const store = useSelector((store) => store)
    useEffect(()=> {
        if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
        else{
            facultyAca();
        }
       
    },[])

      // get the navigation object
  const navigate = useNavigate()

    const facultyAca = async () => {
    try{
        const response = await FacultyAcademicApi()

         if (response.status === 200) {
          log(response);
          setFaculty(response.data) ;
        }
        else{
            toast.error('Data Not Available')
        }
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
                    <span className='gradient__text'>Faculty Academics</span>
                </div>
            </div>

            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="content col-md-8">
                            <div className="post">
                                <div>
                                    <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Faculty Academics</h1>

                                    {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button>
                                    <br /><br /> */}

                                    <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
                                        <tbody>
                                                <tr>
                                                    <td>Tenth Marks</td>
                                                    <td>{faculty.tenthMarks}</td>  
                                                </tr> 
                                                <tr>
                                                    <td>Twelth Marks</td>
                                                    <td>{faculty.twelthMarks}</td>  
                                                </tr>
                                                <tr>
                                                    <td>Diploma Marks</td>
                                                    <td>{faculty.diplomaMarks}</td>
                                                </tr>
                                                <tr>
                                                    <td>Graduation Marks</td>
                                                    <td>{faculty.graduation}</td>
                                                </tr>
                                                <tr>
                                                    <td>PostGraduation Marks</td>
                                                    <td>{faculty.postGraduationmarks}</td>
                                                </tr>
                                                <tr>
                                                    <td>Work Experience</td>
                                                    <td>{faculty.workExperience}</td>
                                                </tr>
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

export default FacultyAcademic;