import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { log } from '../../utils/utils'
import FacultySideBar from '../SideBar/FacultySideBar'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import "../style/feedbackUIForFaculty.css"
import { useSelector } from 'react-redux'

import "../style/feedbackUIForFaculty.css"
import { getStudentFeedback } from '../../services/faculty'

function ViewAllStudentFeedbacks() {
    

    const [feedback, setFeedback] = useState({
        questionsAndPercentage: {},
        extraComments: {}
    });

   //const [extraComments, setExtraComments] = useState()
    //const [question, setQuestion] = useState({id:0,question : "",category:{ id: 0,
   // categoryName: ""}})

    const navigate = useNavigate();
    const store = useSelector((store) => store)

    useEffect(()=>{
        if (!store.faculty.isAuthenticated) {
			navigate('/');
		}
        else
        {
            loadFeedback()
        }
        
    },[])

   

    const loadFeedback = async () => {


        try{
            //get fid from session storage and sent
        const response = await getStudentFeedback(1)
        log(response['data'])
        log(response['data'].extraComments)
 
         if (response['status'] === 200) {
           
            setFeedback(response['data'])
           
           } else {
             toast.error('Error while calling get student feedback api')
           }
    
        }
        catch(error){
            toast.error('No feedbacks to load')
        }


       


    }


    return (    
   <>

<div className="site-content" >
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
                        <span className='gradient__text'>Student Feedbacks</span>
                    </div>
                </div>

                <div className="fullwidth-block" >
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>All Student Feedback</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                     <div>
        <h2 style={{color:"white"}}><b>Feedback Information</b></h2>
        {Object.keys(feedback.questionsAndPercentage).map((question) => (
                       <div className="question-info" style={{color : "white"}} key={question}>
                           <div className="question"><h3><b>{question}</b></h3></div>
                           {Object.entries(feedback.questionsAndPercentage[question]).map(([answer, percentage]) => (
                               <div className="percentage" key={answer} style={{}}>
                                   {answer}: {percentage.toFixed(2)}%
                               </div>
                           ))}      
          </div>
        ))}

        {/* <div>
        <h3><b>Extra Comments</b></h3>
        {
            feedback.extraComments.map((comment)=>{
            return ( <h5>{comment}</h5>)
            })
                           }
        </div> */}
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
    
   

       
        <div>
        <h3><b>Feedback Information</b></h3>
        {Object.keys(feedback.questionsAndPercentage).map((question) => (
                       <div className="question-info" key={question}>
                           <div className="question"><h5><b>{question}</b></h5></div>
                           {Object.entries(feedback.questionsAndPercentage[question]).map(([answer, percentage]) => (
                               <div className="percentage" key={answer} style={{}}>
                                   {answer}: {percentage.toFixed(2)}%
                               </div>
                           ))}      
          </div>
        ))}
        <div>
        <h3><b>Extra Comments</b></h3>
        {
            feedback.extraComments.map((comment)=>{
            return ( <h5>{comment}</h5>)
            })
                           }
        </div>
      </div>
       
        </div> */}
   </>
   )
}

export default ViewAllStudentFeedbacks;