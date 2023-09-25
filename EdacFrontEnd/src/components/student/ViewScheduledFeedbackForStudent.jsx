import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { log } from '../../utils/utils'
import Header from '../Header/Header'
import StudentSideBar from '../SideBar/StudentSideBar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { getFeedbacks } from '../../services/student'

function ViewScheduledFeedbackForStudent() {
    const [feedbacks , setFeedbacks] = useState([])
    //const [question, setQuestion] = useState({id:0,question : "",category:{ id: 0,
   // categoryName: ""}})

    const navigate = useNavigate();
    const store = useSelector((store) => store)
    useEffect(()=>{
        if (!store.student.isAuthenticated) {
			navigate('/');
		}
        else{
            loadfeedbacks()
        }
        
    },[])

   

    const loadfeedbacks = async () => {

        try{
            const response = await getFeedbacks(3)  // id of student from session storage
       
            log(response)
            if (response['status'] === 200) {
              
               setFeedbacks(response['data'])
              
              } else {
                toast.error('Error while calling get scheduled feedback api')
              }
        }
        catch(error)
        {
            toast.error('No Feedbacks to load')
        }


    }


    // const deleteAssignment = async (id) =>{
         
    //     const response = await deleteAssignmentApi(id)
    //     log(response)
    //     if (response['status'] === 200) {
            
    //         toast.error('assignment deleted successfully')
    //         loadassignments()
           
    //        } else {
    //          toast.error('Error while calling delete assignment api')
    //        }

    // }


    debugger
    const giveFeedback = async (id) =>{
        //log(id)
        feedbacks.map((feedbackToEdit)=>{
          //  log(questionToEdit.id)
            if(feedbackToEdit.id == id)
            {
                var copyOfFeedback = {...feedbackToEdit}
                    //log(copyOfFeedback)
                    sessionStorage.setItem("sheduledFeedbackid",id)
                    log(sessionStorage.getItem("sheduledFeedbackid") +"in scheduled feedback")
                    navigate('/student/giveFeedback', { state: { copyOfFeedback} });
                // })
            }
        })


    }

   

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
                        <a href="/admin">student</a>
                        <span className='gradient__text'>Scheduled Feedbacks</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Scheduled Feedback List</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                                        <div className="table-responsive" >
           
                <center>
                <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
                <thead >
                    <tr className='table-primary'>
                      <th><h2><b>Id</b></h2></th>
                      <th><h2><b>Faculty name</b></h2></th>
                      
                
                      <th colSpan={2}><h2><b>Actions</b></h2></th>
                    </tr>
                  </thead>
                <tbody>
                   {
                        feedbacks.map((feedback)=>{

                           
    
                            return(

                               
                                <tr key={feedback.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h3 style={{display : "inline-block",color : "black",}}>{feedback.id} </h3></td>
                                    <td> 
                                    <h3 style={{display : "inline-block",color : "black",}}>{feedback.faculty.firstName}{feedback.faculty.lastName}</h3>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{giveFeedback(feedback.id)}}
                                         style={{
                                            padding: "10px 30px",
                                            color: "#fff",
                                            borderRadius: "5px",
                                            border: "solid #fff 1px",
                                            marginTop: "25px",
                                            opacity: 0.7,
                                          }}>Give Feedback</button>
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
                            <StudentSideBar />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>


          {/* <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>


        <div style={{marginBottom :50}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >All Scheduled Feedbacks</b></h1>
            </center>
        </div>

        <div  >
            <div className="table-responsive" >
           
                <center>
                <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
                <thead >
                    <tr className='table-primary'>
                      <th><h4><b>Id</b></h4></th>
                      <th><h4><b>Faculty name</b></h4></th>
                      
                
                      <th colSpan={2}><h4><b>Actions</b></h4></th>
                    </tr>
                  </thead>
                <tbody>
                   {
                        feedbacks.map((feedback)=>{

                           
    
                            return(

                               
                                <tr key={feedback.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h5 style={{display : "inline-block",color : "black",}}>{feedback.id} </h5></td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{feedback.faculty.firstName}{feedback.faculty.lastName}</h5>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{giveFeedback(feedback.id)}}>Give Feedback</button>
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
    
   </>)
}

export default ViewScheduledFeedbackForStudent;