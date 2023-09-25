import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { getQuestions, deleteQuestion as deleteQuestionApi } from '../../services/feedback'
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'

import { useSelector } from 'react-redux'

function ViewAllQuestions() {
    const [questions , setQuestions] = useState([])
    //const [question, setQuestion] = useState({id:0,question : "",category:{ id: 0,
   // categoryName: ""}})

   const store = useSelector((store) => store)
   const navigate = useNavigate()

    useEffect(()=>{
        if (!store.admin.isAuthenticated) {
            navigate('/');
        }
        else{
            loadquestions()
        }
       
    },[])

   

    const loadquestions = async () => {

        try{
            const response = await getQuestions()
       

            if (response['status'] === 200) {
              
               setQuestions(response['data'])
              
              } else {
                toast.error('Error while calling get question api')
              }
        }
        catch{
            toast.error('no questions to load')
        }
       


    }


    const deleteQuestion = async (id) =>{
         
        const response = await deleteQuestionApi(id)
        log(response)
        if (response['status'] === 200) {
            
            toast.error('question deleted successfully')
            loadquestions()
           
           } else {
             toast.error('Error while calling delete question api')
           }

    }


    debugger
    const editQuestion = async (id) =>{
        //log(id)
        questions.map((questionToEdit)=>{
          //  log(questionToEdit.id)
            if(questionToEdit.id == id)
            {
                var copyOfQuestion = {...questionToEdit}
               // log(copyOfQuestion)
               // setQuestion(copyOfQuestion)
               // navigateToUpdate()
               // log(question)

                // setQuestion(copyOfQuestion, () => {
                    //log(copyOfQuestion); 
                    navigate('/admin/editquestion', { state: { copyOfQuestion } });
                // })
            }
        })
            // log(question)
            // navigate('/editquestion',{state : {question}})


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
                        <a href="/admin">Admin</a>
                        <span className='gradient__text'>questions</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Question List</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                                        <div className="table-responsive" style={{ border: "1px solid #ccc", backgroundColor:"#f9f9f9"}} >
           
           <center>
           <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2", width:"100%"}}>
           <thead >
               <tr className='table-primary'>
                 <th><h2><b>Id</b></h2></th>
                 <th><h2><b>Question</b></h2></th>
                 <th colSpan={2}><h2><b>Actions</b></h2></th>
               </tr>
             </thead>
           <tbody>
              {
                   questions.map((question)=>{

                       
                       return(

                          
                           <tr key={question.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                               <td><h2 style={{display : "inline-block",color : "black",}}>{question.id} </h2></td>
                               <td> 
                               <h2 style={{display : "inline-block",color : "black",}}>{question.question}</h2>
                               </td>

                               <td>
                                   <button className='btn btn-danger' onClick={()=>{deleteQuestion(question.id)}}
                                    style={{
                                        padding: "10px 30px",
                                        color: "#fff",
                                        borderRadius: "5px",
                                        border: "solid #fff 1px",
                                        marginTop: "25px",
                                        opacity: 0.7,
                                      }}>Delete</button>
                               </td>
                               <td>
                                   <button className='btn btn-warning' onClick={()=>{editQuestion(question.id)}}
                                    style={{
                                        padding: "10px 30px",
                                        color: "#fff",
                                        borderRadius: "5px",
                                        border: "solid #fff 1px",
                                        marginTop: "25px",
                                        opacity: 0.7,
                                      }}>Edit</button>
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
                            <AdminSideBar />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>


      {/* <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
         <div style={{marginBottom :50}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >All Questions</b></h1>
            </center>
        </div>

        <div  >
            <div className="table-responsive" style={{ border: "1px solid #ccc", backgroundColor:"#f9f9f9"}} >
           
                <center>
                <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2", width:"100%"}}>
                <thead >
                    <tr className='table-primary'>
                      <th><h4><b>Id</b></h4></th>
                      <th><h4><b>Question</b></h4></th>
                      <th colSpan={2}><h4><b>Actions</b></h4></th>
                    </tr>
                  </thead>
                <tbody>
                   {
                        questions.map((question)=>{

                            
                            return(

                               
                                <tr key={question.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h5 style={{display : "inline-block",color : "black",}}>{question.id} </h5></td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{question.question}</h5>
                                    </td>

                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{deleteQuestion(question.id)}}>Delete</button>
                                    </td>
                                    <td>
                                        <button className='btn btn-warning' onClick={()=>{editQuestion(question.id)}}>Edit</button>
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

export default ViewAllQuestions;