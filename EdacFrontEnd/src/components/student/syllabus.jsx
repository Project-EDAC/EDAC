import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { getSyllabus  as syllabusApi} from "../../services/StudentService/syllabusService"
import StudentSideBar from "../SideBar/StudentSideBar";
import StudentHeader from "../Header/StudentHeader";
import Footer from "../Footer/Footer";
import { useSelector } from 'react-redux'

function Syllabus() {
    const [syls,setSyls] = useState([])
    const store = useSelector((store) => store)

    useEffect(()=> {
        if (!store.student.isAuthenticated) {
            navigate('/');
          }
        syllabus()
    },[])
    // useEffect(()=> {SyllabusService.getSyllabus().then((response)=>{
    //     setSyllabus(response.data)
    //     log(response.data)
    //  }).catch(error => {
    //     console.error(error)}
    //    )},[])

      // get the navigation object
  const navigate = useNavigate()

    const syllabus = async () => {
     
         try{
            const response = await syllabusApi()
            log(response);
            setSyls(response.data) ;
         }catch{
            toast.error("Syllabus Not available")
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
                        <a href="/student/syllabus">Syllabus</a>
                        <span className='gradient__text'>Syllabus</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Syllabus</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button>
                                        <br /><br /> */}

                                        <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
                                            <thead>
                                                <th>No</th>
                                                <th>Subject</th>
                                                <th>Duration</th>
                                                <th>Topics</th>
                                            </thead>
                                            <tbody>
                                                {
                                                    syls.map(syl =>
                                                        <tr key = {syl.id}>
                                                        <td>{syl.id}</td> 
                                                        <td>{syl.subject}</td> 
                                                        <td>{syl.duration}</td> 
                                                        <td>{syl.topics}</td>  
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

export default Syllabus;

{/* <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
           <div style={{marginBottom :50}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Syllabus</b></h1>
            </center>
            </div>
            <table className="table table-bordered table-hover" style={{ backgroundColor: "transparent" }}>
                <thead>
                    <th>No</th>
                    <th>Subject</th>
                    <th>Duration</th>
                    <th>Topics</th>
                </thead>
                <tbody>
                    {
                        syls.map(syl =>
                            <tr key = {syl.id}>
                               <td>{syl.id}</td> 
                               <td>{syl.subject}</td> 
                               <td>{syl.duration}</td> 
                               <td>{syl.topics}</td>  
                            </tr> ) 
                    }
                </tbody>
            </table>
        </div> */}