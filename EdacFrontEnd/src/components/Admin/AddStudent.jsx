import { useState ,useEffect} from 'react'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import { addStudent as addStudentApi } from '../../services/admin'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCourse } from '../../services/admin'


function AddStudent() {
    	
	
	const [firstName,setFirstName] = useState('')
	const [lastName,setLastName] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [confirmPassword , setConfirmPassword] = useState('')
	const [courseid, setCourseId] = useState(0)
	const [courses, setCourses] = useState([])

	const store = useSelector((store) => store)

	const navigate = useNavigate()

	useEffect(() => {
		log("in Add student : " + store.admin.isAuthenticated)
		// Check if user is not authenticated, and navigate if necessary
		if (!store.admin.isAuthenticated) {
			navigate('/');
		}
		else{
			loadCourse()
		}
	}, []);

	const addStudent = async () =>{

		if (firstName.length === '') {
			toast.error('Please enter first name')
		  } else if (lastName.length === '') {
			toast.error('Please enter last name')
		  } else if (email.length === '') {
			toast.error('Please enter email')
		  } else if (password.length === '') {
			toast.error('Please enter password')
		  } else if (confirmPassword.length ==='') {
			toast.error('Please confirm password')
		  } else if (password !== confirmPassword) {
			toast.error('Password does not match')
		  }else if(courseid===0)
		  {
			toast.error('Please enter course id')
		  }
		  else{

			const response = await addStudentApi(
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
				courseid
			)

			if (response['status'] === 201) {
                toast.success('Successfully added a new student')


              } else {
                toast.error('Error while adding a new student, please try again')
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
            <a href="/admin/allstudents">students</a>
            <span className='gradient__text'>Add student</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Student</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
						<div className="mb-2" >
								<label ><h3 style={{color:'white'}}>First Name</h3></label>
								<input type="text" className="form-control"
									name="first_name"
									placeholder="First Name"
									//value={user.first_name}
									onChange={(e) => {
										setFirstName(e.target.value)
									}}
									></input>
							</div>
							<div className="mb-2">
							<label ><h3 style={{color:'white'}}>Last Name</h3></label>
							<input type="text" className="form-control"
									name="last_name"
									placeholder="last Name"
									//value={user.first_name}
									onChange={(e) => {
										setLastName(e.target.value)
									}}
									></input>
							</div>
							<div className="mb-2">
							<label ><h3 style={{color:'white'}}>EMail</h3></label>
								<input type="email" className="form-control"
									name="email"
									placeholder="Email"
									//value={user.email}
									onChange={(e) => {
										setEmail(e.target.value)
									}}></input>
							</div>
							<div className="mb-2">
							<label ><h3 style={{color:'white'}}>Password</h3></label>
								<input type="password" className="form-control"
									name="password"
									placeholder="Password"
									//value={user.password}
									onChange={(e) => {
										setPassword(e.target.value)
									}} ></input>
								
							</div>
							<div className="mb-2">
							<label ><h3 style={{color:'white'}}>Confirm Password</h3></label>
								<input type="password" className="form-control"
									name="confirmPassword"
									placeholder="Confirm Password"
									//value={user.confirmPassword}
									onChange={(e) => {
										setConfirmPassword(e.target.value)
									}}></input>
							</div>

							<div className="mb-2">
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
                          <button onClick={addStudent} className="btn btn-success"
						  style={{
							padding: "10px 30px",
							color: "#fff",
							borderRadius: "5px",
							border: "solid #fff 1px",
							marginTop: "25px",
							opacity: 0.7,
						  }}>
                            Add Student
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








	{/* <div className="container" style={{marginTop: 100}}>
	<div  >
		<div style={{marginLeft: 450 , color: "blue"}}><h1>Add Student</h1></div>
	<div className="form-group" style={{marginBottom: 20}}>
		<label ><h3>First Name</h3></label>
		<input type="text" className="form-control"
			name="first_name"
			placeholder="First Name"
			//value={user.first_name}
			onChange={(e) => {
				setFirstName(e.target.value)
			}}
			></input>
	</div>
	<div className="form-group" style={{marginBottom: 20}}>
	<label ><h3>Last Name</h3></label>
	<input type="text" className="form-control"
			name="last_name"
			placeholder="last Name"
			//value={user.first_name}
			onChange={(e) => {
				setLastName(e.target.value)
			}}
			></input>
	</div>
	<div className="form-group" style={{marginBottom: 20}}>
	<label ><h3>EMail</h3></label>
		<input type="email" className="form-control"
			name="email"
			placeholder="Email"
			//value={user.email}
			onChange={(e) => {
				setEmail(e.target.value)
			}}></input>
	</div>
	<div className="form-group" style={{marginBottom: 20}}>
	<label ><h3>Password</h3></label>
		<input type="password" className="form-control"
			name="password"
			placeholder="Password"
			//value={user.password}
			onChange={(e) => {
				setPassword(e.target.value)
			}} ></input>
		
	</div>
	<div className="form-group" style={{marginBottom: 20}}>
	<label ><h3>Confirm Password</h3></label>
		<input type="password" className="form-control"
			name="confirmPassword"
			placeholder="Confirm Password"
			//value={user.confirmPassword}
			onChange={(e) => {
				setConfirmPassword(e.target.value)
			}}></input>
	</div>

	<div className="form-group" style={{marginBottom: 20}}>
	<label ><h3>Course Id</h3></label>
		<input type="number" className="form-control"
			name="courseid"
			placeholder="Course id"
			//value={user.confirmPassword}
			onChange={(e) => {
				setCourseId(e.target.value)
			}}></input>
	</div>
	<br></br>
	<div>
		<button className="btn btn-primary"
		onClick={addStudent}>
			Add Student
		</button>
	</div>
	</div>
	</div> */}
</>);
}

export default AddStudent;