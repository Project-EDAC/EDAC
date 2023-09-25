import { useState ,useEffect} from 'react'
import { toast } from 'react-toastify'
import { addCourse as addCourseApi } from '../../services/admin'
import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { useNavigate } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
//import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'


function AddCourse() {
    const [name, setName] = useState('')
    const store = useSelector((store) => store)
    // const isAuthenticated = useSelector((store) => store.auth.status)
   // const store = useSelector((store) => store)
    const navigate = useNavigate()
   // const history = useHistory()


   useEffect(() => {
    // Check if user is not authenticated, and navigate if necessary
    if (!store.admin.isAuthenticated) {
        navigate('/');
    }
}, []);

//    useEffect(() => {
//     log("UseEffect :" + store.auth.status)
//     // Check authentication status and navigate if not authenticated
//     if (!store.auth.status) {
//         navigate('/');
//     }
// }, [store.auth.status, navigate]);

    const addCourse = async () => {
        log(name)
        if(name.length === '')
        {
            toast.error('please enter course name')
        }
        else{

            log(name)
            const response = await addCourseApi(name)
            log(response['status'])
            if(response['status'] === 201)
            {
                toast.success('Successfully added a new course')
            }
            else{
                toast.error('Error while adding a new course, please try again')
            }
        }
    }

    debugger
    // if (!store.admin.isAuthenticated) {
    //   log("in if :" +store.admin.isAuthenticated)
    //   navigate('/'); // Redirect if not authenticated
    //   return null; // Render nothing during initial render
    // }

    return ( 
    
    <div className='site-content'>
      <Header />
            <main className="main-content">
              <div className="container">
                <div className="breadcrumb" style={{
                                                    background: "#262936",
                                                    borderRadius: "40px",
                                                    padding: "20px 30px",
                                                    fontSize: "13px",
                                                  }}>
                  <a href="/">Home</a>
                  <a href="/admin">Admin</a>
                  {/* <a href="/admin/exam">Course</a> */}
                  <span className='gradient__text'>Add Course</span>
                </div>
                <div className="fullwidth-block">
                  <div className="row">
                    <div className="content col-md-8">
                      <div className="post">
                        <div>
                          <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Course</h1>
      
                          <div className="row">
                            <div className="col">
                              <div className="form">
                              <div className="form-group" style={{marginBottom: 20}}>
                                  <label ><h3 style={{color:'white'}}>Course Name</h3></label>
                                  <input type="text" className="form-control"
                                      name="name"
                                      placeholder="name"
                                      //value={user.first_name}
                                      onChange={(e) => {
                                          setName(e.target.value)
                                      }}
                                      ></input>
                              </div>
                               
      
                                <br />
                                <button onClick={addCourse} className="btn btn-success"
                                style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>
                                Add Course
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
      </div>
     
      
   

);


    
}

export default AddCourse;