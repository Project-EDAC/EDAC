import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { log } from '../../utils/utils'
import { getStudentAssignments, changeStatusOfAssignment as changeStatus } from '../../services/faculty'
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'

function ViewAllStudentAssignment() {

 
	

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
            const response = await getStudentAssignments()
            log(response)
     
             if (response['status'] === 200) {
               
                setAssignments(response['data'])
               
               } else {
                 toast.error('Error while calling get student assignment api')
               }
    
        }
        catch(error){
            toast.error('No assignments to load')
        }


        


    }


    const changeStatusOfAssignment = async (sid ,said)=>{

        const response = await changeStatus(sid,said)
       

        if (response['status'] === 200) {
          
           //setAssignments(response['data'])
           toast.success('Assignment status got updated')
           loadassignments()
          
          } else {
            toast.error('Error while calling get student assignment api')
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
                        <span className='gradient__text'>Student Assignments</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Student Assignment List</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                                        <div className="table-responsive">
           
           <center>
           <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
           <thead >
               <tr  className='table-primary'>
                 <th><h2><b>Student Id</b></h2></th>
                 <th><h2><b>Assignment Desc</b></h2></th>
                 <th><h2><b>Status</b></h2></th>
                 <th ><h2><b>Actions</b></h2></th>
               </tr>
             </thead>
             
           <tbody>
              {
                   assignments.map((assignment)=>{

                     
                       return(

                          
                           <tr key={assignment.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                               <td><h3 style={{display : "inline-block",color : "black",}}>{assignment.student.id} </h3></td>
                               <td> 
                               <h3 style={{display : "inline-block",color : "black",}}>{assignment.scheduledAssignment.assignmentDescription}</h3>
                               </td>
                               <td> 
                               <h3 style={{display : "inline-block",color : "black",}}>{assignment.status}</h3>
                               </td>
                               <td>
                                   <button className='btn btn-warning' onClick={()=>{changeStatusOfAssignment(assignment.student.id,assignment.scheduledAssignment.id)}}
                                   style={{
                                    padding: "10px 30px",
                                    color: "#fff",
                                    borderRadius: "5px",
                                    border: "solid #fff 1px",
                                    marginTop: "25px",
                                    opacity: 0.7,
                                  }}>Change Status</button>
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
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >All Student Assignments</b></h1>
            </center>
        </div>
        <div >
            <div className="table-responsive">
           
                <center>
                <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
                <thead >
                    <tr  className='table-primary'>
                      <th><h4><b>Student Id</b></h4></th>
                      <th><h4><b>Assignment Desc</b></h4></th>
                      <th><h4><b>Status</b></h4></th>
                      <th ><h4><b>Actions</b></h4></th>
                    </tr>
                  </thead>
                  
                <tbody>
                   {
                        assignments.map((assignment)=>{

                          
                            return(

                               
                                <tr key={assignment.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h5 style={{display : "inline-block",color : "black",}}>{assignment.student.id} </h5></td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{assignment.scheduledAssignment.assignmentDescription}</h5>
                                    </td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{assignment.status}</h5>
                                    </td>
                                    <td>
                                        <button className='btn btn-warning' onClick={()=>{changeStatusOfAssignment(assignment.student.id,assignment.scheduledAssignment.id)}}>Change Status</button>
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
        </div> */}
    
   </> );
}

export default ViewAllStudentAssignment;