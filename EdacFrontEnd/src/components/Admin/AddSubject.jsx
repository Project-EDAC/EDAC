import { useState ,useEffect} from 'react'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import { addSubject as addSubjectApi } from '../../services/admin'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCourse } from '../../services/admin'


function AddSubject() {
//     private String name;
// 	private Long courseid;
    const [name, setName] = useState('')
    const [courseid,setCourseId] = useState(0)
    const [courses, setCourses] = useState([])

    const store = useSelector((store) => store)

	const navigate = useNavigate()
	useEffect(() => {
		log("in Add subject : " + store.admin.isAuthenticated)
		// Check if user is not authenticated, and navigate if necessary
		if (!store.admin.isAuthenticated) {
			navigate('/');
		}
        else{
			loadCourse()
		}
	}, []);

    const addSubject = async () => {
        if(name.length == '')
        {
            toast.error('Please enter subject name')
        }
        else if(courseid == 0)
        {
            toast.error('Please enter course id')
        }
        else{

            const response = await addSubjectApi(name,courseid)

            if (response['status'] === 201) {
                toast.success('Successfully added a new subject')
        
               
              } else {
                toast.error('Error while adding a new subject, please try again')
              }
        }
    }



    const loadCourse = async () => {

		try{
			const response = await getCourse()
       

			if (response['status'] === 200) {
			  
				setCourses(response['data'])
			  
			  } else {
				toast.error('Error while calling get student api')
			  }
		}
		catch(error)
		{
			toast.error('no courses to load')
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
                    {/* <a href="/admin/subject">subject</a>  */}
                    {/* all subject */}
                    <span className='gradient__text'>Add Subject</span>
                </div>
                <div className="fullwidth-block">
                    <div className="row">
                    <div className="content col-md-8">
                        <div className="post">
                        <div>
                            <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Subject</h1>

                            <div className="row">
                            <div className="col">
                                <div className="form">
                                <div className="form-group" style={{marginBottom: 20}}>
                                        <label ><h3 style={{color:'white'}}>Subject Name</h3></label>
                                        <input type="text" className="form-control"
                                            name="name"
                                            placeholder="name"
                                            //value={user.first_name}
                                            onChange={(e) => {
                                                setName(e.target.value)
                                            }}
                                            ></input>
                                    </div>

                                <div className="form-group" style={{marginBottom: 20}}>
                                        <label ><h3 style={{color:'white'}}>Course </h3></label>
                                        <select
                              name="Subject"
                              id="inputSubject"
                              className="form-control"
                              value={courseid}
                              onChange={(e) => {
                                setCourseId(e.target.value);
                              }}
                            >
                              <option value="" style={{color:'white'}}>Select Course</option>
                              {courses.map((course) => (
                                <option key={course.id} value={course.id}>
                                  {course.name}
                                </option>
                              ))}
                            </select>
                                    </div>
                                

                                <br />
                                <button onClick={addSubject} className="btn btn-success"
                                style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>
                                    Add subject
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
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Add Subject</b></h1>
            </center>
        </div>
  
        <div style={{marginTop : 10,paddingBottom: 10, marginLeft: 10 ,border: "1px solid #ccc",padding:10}} >
		
	<div className="form-group" style={{marginBottom: 20}}>
		<label ><h3>Subject Name</h3></label>
		<input type="text" className="form-control"
			name="name"
			placeholder="name"
			//value={user.first_name}
			onChange={(e) => {
				setName(e.target.value)
			}}
			></input>
	</div>

  <div className="form-group" style={{marginBottom: 20}}>
		<label ><h3>Course Id</h3></label>
		<input type="text" className="form-control"
			name="courseid"
			placeholder="CourseId"
			//value={user.first_name}
			onChange={(e) => {
				setCourseId(e.target.value)
			}}
			></input>
	</div>

	<br></br>
	<div>
  <button onClick={addSubject} className='btn btn-primary' style={{backgroundColor:"#"}}>
         Add Subject
               </button>
	</div>
	</div>
	</div> */}
</>
 );
}

export default AddSubject;