import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { log } from '../../utils/utils'
import { getAssignments , deleteAssignment as deleteAssignmentApi} from '../../services/faculty'
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'

function ViewAllScheduledAssignment() {
    const [assignments , setAssignments] = useState([])
    //const [question, setQuestion] = useState({id:0,question : "",category:{ id: 0,
   // categoryName: ""}})

    const navigate = useNavigate();
    const store = useSelector((store) => store)

    useEffect(()=>{
        if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
        else{
            loadassignments()
        }
        
    },[])

   

    const loadassignments = async () => {

        try{
            const response = await getAssignments()
       

            if (response['status'] === 200) {
              
               setAssignments(response['data'])
              
              } else {
                toast.error('Error while calling get question api')
              }
    
        }
        catch(error){
            toast.error('No assignments to load')
        }
    }


    const deleteAssignment = async (id) =>{
         
        const response = await deleteAssignmentApi(id)
        log(response)
        if (response['status'] === 200) {
            
            toast.error('assignment deleted successfully')
            loadassignments()
           
           } else {
             toast.error('Error while calling delete assignment api')
           }

    }


    debugger
    // const editAssignment = async (id) =>{
    //     //log(id)
    //     assignments.map((assignmentToEdit)=>{
    //       //  log(questionToEdit.id)
    //         if(assignmentToEdit.id == id)
    //         {
    //             var copyOfAssignment = {...assignmentToEdit}
               
    //                 navigate('/editscheduledassignment', { state: { copyOfAssignment } });
    //             // })
    //         }
    //     })


    // }

   

    // const navigateToUpdate = ()=>{

    //     log(question); 
    //     navigate('/editquestion', { state: { question } });

    // }


    return (   <>

<div className="site-content">
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
                        <a href="/faculty">Faculty</a>
                        <span className='gradient__text'>Schedule Assignment</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Schedules Assignment List</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                                        <div className="table-responsive" >
           
           <center>
           <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
           <thead >
               <tr className='table-primary'>
                 <th><h2><b>Id</b></h2></th>
                 <th><h2><b>Assignment Desc</b></h2></th>
                 <th><h2><b>git Repo </b></h2></th>
                 <th><h2><b>Due date</b></h2></th>
                 <th><h2><b>Subject</b></h2></th>
                 <th colSpan={2}><h2><b>Actions</b></h2></th>
               </tr>
             </thead>
           <tbody>
              {
                   assignments.map((assignment)=>{

                      

                       return(

                          
                           <tr key={assignment.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                               <td><h3 style={{display : "inline-block",color : "black",}}>{assignment.id} </h3></td>
                               <td> 
                               <h3 style={{display : "inline-block",color : "black",}}>{assignment.assignmentDescription}</h3>
                               </td>
                               <td> 
                               <h3 style={{display : "inline-block",color : "black",}}><a href={assignment.gitRepoLink}>{assignment.gitRepoLink}</a></h3>
                               </td>
                               <td> 
                               <h3 style={{display : "inline-block",color : "black",}}>{assignment.dueDate}</h3>
                               </td>
                               <td> 
                               <h3 style={{display : "inline-block",color : "black",}}>{assignment.subject.name}</h3>
                               </td>
                               <td>
                                   <button className='btn btn-danger' onClick={()=>{deleteAssignment(assignment.id)}}
                                   style={{
                                    padding: "10px 30px",
                                    color: "#fff",
                                    borderRadius: "5px",
                                    border: "solid #fff 1px",
                                    marginTop: "25px",
                                    opacity: 0.7,
                                  }}
                                   >Delete</button>
                               </td>
                              
                               
                            </tr>
                           
                           )
                       
                })
                
              }
           </tbody>
       </table>
           </center>
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
        </div>


         {/* <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
         
        <div style={{marginBottom :50}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >All Scheduled Assignments</b></h1>
            </center>
        </div>
        <div  >
            <div className="table-responsive" >
           
                <center>
                <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
                <thead >
                    <tr className='table-primary'>
                      <th><h4><b>Id</b></h4></th>
                      <th><h4><b>Assignment Desc</b></h4></th>
                      <th><h4><b>git Repo </b></h4></th>
                      <th><h4><b>Due date</b></h4></th>
                      <th><h4><b>Subject</b></h4></th>
                      <th colSpan={2}><h4><b>Actions</b></h4></th>
                    </tr>
                  </thead>
                <tbody>
                   {
                        assignments.map((assignment)=>{

                           

                            return(

                               
                                <tr key={assignment.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h5 style={{display : "inline-block",color : "black",}}>{assignment.id} </h5></td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{assignment.assignmentDescription}</h5>
                                    </td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}><a href={assignment.gitRepoLink}>{assignment.gitRepoLink}</a></h5>
                                    </td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{assignment.dueDate}</h5>
                                    </td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{assignment.subject.name}</h5>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{deleteAssignment(assignment.id)}}>Delete</button>
                                    </td>
                                   
                                    
                                 </tr>
                                
                                )
                            
                     })
                     
                   }
                </tbody>
            </table>
                </center>
            </div>
        </div>
        </div>  */}
    
   </> );
}

export default ViewAllScheduledAssignment;