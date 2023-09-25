import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
// import { login } from '../../features/authSlice'
import { log } from '../../utils/utils'
import { getSyllabus  as syllabusApi} from "../../services/Faculty/syllabusService"
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import FacultyHeader from '../Header/FacultyHeader'
function FacSyllabus() {
    const [syls,setSyls] = useState([])
    const store = useSelector((store) => store)
    useEffect(()=> {
        if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
    else{
        syllabus()
    }   
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
                    <span className='gradient__text'>Syllabus</span>
                </div>
            </div>

            <div className="fullwidth-block">
                <div className="container">
                    <div className="row">
                        <div className="content col-md-8">
                            <div className="post">
                                <table className="table table-bordered table-striped">
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
                        <FacultySideBar />
                    </div>
                </div>
            </div>
        </main>

        <Footer />
    </div>
    
        );
}

export default FacSyllabus;