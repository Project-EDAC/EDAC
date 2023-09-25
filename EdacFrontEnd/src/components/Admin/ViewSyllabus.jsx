import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
// import { getQuestions, deleteQuestion as deleteQuestionApi } from '../../services/feedback'
//import getSyllabus from '../../services/admin'
import { getSyllabus } from '../../services/admin'
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'

import { useSelector } from 'react-redux'


function ViewSyllabus() {
    
    
    const [syllabus , setSyllabus] = useState([])
    //const [question, setQuestion] = useState({id:0,question : "",category:{ id: 0,
   // categoryName: ""}})

   const store = useSelector((store) => store)
   const navigate = useNavigate()

    useEffect(()=>{
        if (!store.admin.isAuthenticated) {
            navigate('/');
        }
        else{
            loadsyllabus()
        }
       
    },[])

   

    const loadsyllabus = async () => {

        try{
            const response = await getSyllabus()
            log(response)

            if (response['status'] === 200) {
              
               setSyllabus(response['data'])
              
              } else {
                toast.error('Error while calling get syllabus api')
              }
        }
        catch{
            toast.error('no syllabus to load')
        }
       


    }


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
                        <span className='gradient__text'>Syllabus</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Syllabus</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                                        <div className="table-responsive" style={{ border: "1px solid #ccc", backgroundColor:"#f9f9f9"}} >
           
           <center>
           <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2", width:"100%"}}>
           <thead >

           {/* private String Subject;

private String topics;

private String duration; */}

               <tr className='table-primary'>
                 <th><h2><b>Subject</b></h2></th>
                 <th><h2><b>Topics</b></h2></th>
                 
                 <th ><h2><b>Duration</b></h2></th>
               </tr>
             </thead>
           <tbody>
              {
                   syllabus.map((s)=>{

                       
                       return(

                          
                           <tr  style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                               
                               <td> 
                               <h2 style={{display : "inline-block",color : "black",}}>{s.subject}</h2>
                               </td>
                               <td> 
                               <h2 style={{display : "inline-block",color : "black",}}>{s.topics}</h2>
                               </td>
                               <td> 
                               <h2 style={{display : "inline-block",color : "black",}}>{s.duration}</h2>
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


      
   </> );




}

export default ViewSyllabus;