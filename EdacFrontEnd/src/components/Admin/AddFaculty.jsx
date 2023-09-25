import { useState ,useEffect} from 'react'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'

import { addFaculty as addFacultyApi } from '../../services/admin'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getSubjectList as getSubjectListApi } from "../../services/subject";

function AddFaculty() {
    		
	const [firstName,setFirstName] = useState('')
	const [lastName,setLastName] = useState('')
	const [email,setEmail] = useState('')
	const [password,setPassword] = useState('')
	const [confirmPassword , setConfirmPassword] = useState('')
	const [subjectid, setSubjectId] = useState(0)
	const [subjects, setSubjects] = useState([]);
	
	const navigate = useNavigate()
	const store = useSelector((store) => store)

	
	useEffect(() => {
		log("in Add Faculty : " + store.admin.isAuthenticated)
		// Check if user is not authenticated, and navigate if necessary
		if (!store.admin.isAuthenticated) {
			navigate('/');
		}
		else
		{
			loadSubject();
		}
	}, []);


	const addFaculty = async () =>{

		if (firstName.length === '') {
			toast.error('Please enter first name')
		  } else if (lastName.length === '') {
			toast.error('Please enter last name')
		  } else if (email.length === '') {
			toast.error('Please enter email')
		  } else if (password.length === '') {
			toast.error('Please enter password')
		  } else if (confirmPassword.length === '') {
			toast.error('Please confirm password')
		  } else if (password !== confirmPassword) {
			toast.error('Password does not match')
		  }else if(subjectid===0)
		  {
			toast.error('Please enter subject id')
		  }
		  else{

			const response = await addFacultyApi(
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
				subjectid
			)

			if (response['status'] === 201) {
                toast.success('Successfully added a new faculty')
				navigate('/admin/addfaculty');

              } else {
                toast.error('Error while adding a new faculty, please try again')
              }

		  }

	}


	const loadSubject = async () => {
		try {
		  const response = await getSubjectListApi();
		  if (response) {
			setSubjects(response);
		  } else {
			toast.error("Error while loading subjects");
		  }
		} catch (error) {
		  toast.error("An error occurred while loading subjects");
		}
	  };

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
            <a href="/admin/allfaculty">faculty</a>
            <span className='gradient__text'>Add faculty</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Faculty</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
							<div className="mb-3" >
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
							<div className="mb-3" >
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
							<div className="mb-3" style={{marginBottom: 20}}>
							<label ><h3 style={{color:'white'}}>EMail</h3></label>
								<input type="email" className="form-control"
									name="email"
									placeholder="Email"
									//value={user.email}
									onChange={(e) => {
										setEmail(e.target.value)
									}}></input>
							</div>
							<div className="mb-3" >
							<label ><h3 style={{color:'white'}}>Password</h3></label>
								<input type="password" className="form-control"
									name="password"
									placeholder="Password"
									//value={user.password}
									onChange={(e) => {
										setPassword(e.target.value)
									}} ></input>
								
							</div>
							<div className="mb-3" >
							<label ><h3 style={{color:'white'}}>Confirm Password</h3></label>
								<input type="password" className="form-control"
									name="confirmPassword"
									placeholder="Confirm Password"
									//value={user.confirmPassword}
									onChange={(e) => {
										setConfirmPassword(e.target.value)
									}}></input>
							</div>

							<div className="mb-3">
							<label ><h3 style={{color:'white'}}>Subject </h3></label>
							<select
                              name="Subject"
                              id="inputSubject"
                              className="form-control"
                              value={subjectid}
                              onChange={(e) => {
                                setSubjectId(e.target.value);
                              }}
                            >
                              <option value="" style={{color:'white'}}>Select Subject</option>
                              {subjects.map((subject) => (
                                <option key={subject.id} value={subject.id}>
                                  {subject.name}
                                </option>
                              ))}
                            </select>
							</div>

                          <br />
                          <button onClick={addFaculty} className="btn btn-success"style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>
                            Add faculty
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
		<div style={{marginLeft: 450 , color: "blue"}}><h1>Add Faculty</h1></div>
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
	<label ><h3>Subject Id</h3></label>
		<input type="number" className="form-control"
			name="subjectid"
			placeholder="Subject id"
			//value={user.confirmPassword}
			onChange={(e) => {
				setSubjectId(e.target.value)
			}}></input>
	</div>
	<br></br>
	<div>
		<button className="btn btn-primary"
		onClick={addFaculty}>
			Add Faculty
		</button>
	</div>
	</div>
	</div> */}
</>);
}

export default AddFaculty;