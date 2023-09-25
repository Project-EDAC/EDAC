import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { scheduleFeedback as  scheduleFeedbackApi} from '../../services/feedback'
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
import { getFaculties } from '../../services/admin'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function ScheduleFeedback() {
    // private Long facultyId;
    const [facultyId,setFacultyId] = useState(0)
    const [faculties , setFaculties] = useState([])

    const store = useSelector((store) => store)
    const navigate = useNavigate()

    useEffect(()=>{
      if (!store.admin.isAuthenticated) {
    navigate('/');
  }
      else{
          loadfaculties()
      }
      
  },[])

    const scheduleFeedback = async ()=>{

        if(facultyId === 0)
        {
            toast.error('please select faculty ')
        }
        else{
            const response = await scheduleFeedbackApi(facultyId)

            if(response['status'] == 201)
            {
               
                toast.success('Successfully scheduled feedback')
                
                
            }
            else{
                toast.error('Error while schedulingh a new feedback, please try again')
            }
        }
    }


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


    return ( <>

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
            <span className='gradient__text'>Schedule feedback</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Schedule Feedback</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className="mb-2" style={{marginBottom: 20}}>
            <label ><h3 style={{color:"white"}}>Faculty </h3></label>
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
                          <button onClick={scheduleFeedback} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            schedule feedback
                          </button>
                          
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

{/* <div className='container' style={{marginTop : 40,paddingBottom: 10, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
<div style={{marginBottom :20}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Schedule Feedback For Faculty</b></h1>
            </center>
        </div>
        <div style={{marginTop : 10,paddingBottom: 10, marginLeft: 10 ,border: "1px solid #ccc",padding:10}} >
          
        <div className="form-group" style={{marginBottom: 20}}>
            <label ><h3>Faculty Id</h3></label>
            <input type="text" className="form-control"
                name="facultyId"
                placeholder="FacultyId"
                //value={editedquestion}
                onChange={(e) => {
                    setFacultyId(e.target.value)
                }}
                ></input>
        </div>

        <div>
            <button className="btn btn-primary"
            onClick={scheduleFeedback}>
               Schedule Feedback
            </button>
        </div>
        </div>
        </div> */}
    </>);
}

export default ScheduleFeedback;