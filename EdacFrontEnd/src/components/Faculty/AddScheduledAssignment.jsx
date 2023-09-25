import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'

import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { log } from '../../utils/utils'
import Header from '../Header/Header'
import FacultySideBar from '../SideBar/FacultySideBar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { scheduleAssignment as addScheduledAssignmentApi } from '../../services/faculty'
import { getSubjectList as getSubjectListApi } from "../../services/faculty";

function AddScheduledAssignment() {

    // private String assignmentDescription;
	
	// @NotBlank
	// private String gitRepoLink;
	
	// @FutureOrPresent
	// private LocalDate dueDate;
	
	// private Long subjectId;


    const [assignmentDescription,setAssignmentDescription] = useState('')
	const [gitRepoLink,setGitRepoLink] = useState('')
	const [dueDate,setDueDate] = useState('')
	const [subjectId, setSubjectId] = useState(0)
	const [subjects, setSubjects] = useState([]);

	const navigate = useNavigate()
	const store = useSelector((store) => store)

	
	useEffect(() => {
		log("in Add scheduled Assignment : " + store.admin.isAuthenticated)
		// Check if user is not authenticated, and navigate if necessary
		if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
		else
		{
			loadSubject();
		}
	}, []);

	const addScheduledAssignment = async () =>{

		if (assignmentDescription.length == '') {
			toast.error('Please enter assignment description')
		  } else if (gitRepoLink.length == '') {
			toast.error('Please enter git repo link')
		  } else if (dueDate == '') {
			toast.error('Please enter due date')
		  }else if(subjectId==0)
		  {
			toast.error('Please enter subject id')
		  }
		  else{

			const response = await addScheduledAssignmentApi(
				assignmentDescription,
                gitRepoLink,
                dueDate,
				subjectId
			)

			if (response['status'] === 201) {
                toast.success('Successfully scheduled a new assignment')


              } else {
                toast.error('Error while scheduling a new assignment, please try again')
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
            <a href="/faculty/home">faculty</a>
            <a href="/faculty/allscheduleassignment">Scheduled assignments</a>
            <span className='gradient__text'>Schedule assignment</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className="gradient__text" style={{ textAlign: "center", margin: 10 }}>Schedule assignment</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
						<div className="mb-2" >
								<label ><h3 style={{color:"white"}}>Assignment Description</h3></label>
								<input type="text" className="form-control"
									name="assignmentDescription"
									placeholder="Assignment Description"
									//value={user.first_name}
									onChange={(e) => {
										setAssignmentDescription(e.target.value)
									}}
									></input>
							</div>
							<div className="mb-2" >
							<label ><h3 style={{color:"white"}} >Git Repository link</h3></label>
							<input type="text" className="form-control"
									name="gitRepoLink"
									placeholder="git Repository Link"
									//value={user.first_name}
									onChange={(e) => {
										setGitRepoLink(e.target.value)
									}}
									></input>
							</div>
							<div className="mb-2" >
							<label ><h3 style={{color:"white"}}>Due Date</h3></label>
								<input type="date" className="form-control"
									name="dueDate"
									placeholder="DueDate"
									//value={user.email}
									onChange={(e) => {
										setDueDate(e.target.value)
									}}></input>
							</div>

							<div className="mb-2" >
							<label ><h3 style={{color:"white"}}>Subject </h3></label>
							<select
                              name="Subject"
                              id="inputSubject"
                              className="form-control"
                              value={subjectId}
                              onChange={(e) => {
                                setSubjectId(e.target.value);
                              }}
                            >
                              <option value="">Select Subject</option>
                              {subjects.map((subject) => (
                                <option key={subject.id} value={subject.id}>
                                  {subject.name}
                                </option>
                              ))}
                            </select>
							</div>

                          <br />
                          <button onClick={addScheduledAssignment} className="btn btn-success"style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>
                            Schedule assignment
                          </button>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FacultySideBar />
            </div>
          </div>
        </div>
      </main>
      <Footer />


	
	{/* <div className='container' style={{marginTop : 40,paddingBottom: 10, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
	<div style={{marginBottom :20}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Schedule Assignment</b></h1>
            </center>
        </div>
		<div style={{marginTop : 10,paddingBottom: 10, marginLeft: 10 ,border: "1px solid #ccc",padding:10}} >
		
	<div className="form-group" style={{marginBottom: 20}}>
		<label ><h3>Assignment Description</h3></label>
		<input type="text" className="form-control"
			name="assignmentDescription"
			placeholder="Assignment Description"
			//value={user.first_name}
			onChange={(e) => {
				setAssignmentDescription(e.target.value)
			}}
			></input>
	</div>
	<div className="form-group" style={{marginBottom: 20}}>
	<label ><h3>Git Repository link</h3></label>
	<input type="text" className="form-control"
			name="gitRepoLink"
			placeholder="git Repository Link"
			//value={user.first_name}
			onChange={(e) => {
				setGitRepoLink(e.target.value)
			}}
			></input>
	</div>
	<div className="form-group" style={{marginBottom: 20}}>
	<label ><h3>Due Date</h3></label>
		<input type="date" className="form-control"
			name="dueDate"
			placeholder="DueDate"
			//value={user.email}
			onChange={(e) => {
				setDueDate(e.target.value)
			}}></input>
	</div>

	<div className="form-group" style={{marginBottom: 20}}>
	<label ><h3>Subject Id</h3></label>
		<input type="number" className="form-control"
			name="subjectId"
			placeholder="Subject id"
			//value={user.confirmPassword}
			onChange={(e) => {
				setSubjectId(e.target.value)
			}}></input>
	</div>
	<br></br>
	<div>
		<button className="btn btn-primary"
		onClick={addScheduledAssignment}>
			Schedule assignment
		</button>
	</div>
	</div>
	</div> */}
</>);
}

export default AddScheduledAssignment;