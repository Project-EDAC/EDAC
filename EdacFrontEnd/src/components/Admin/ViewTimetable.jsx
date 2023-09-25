import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
// import { getQuestions, deleteQuestion as deleteQuestionApi } from '../../services/feedback'
import {getTimetable} from '../../services/admin'
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'

import { useSelector } from 'react-redux'

function ViewTimetable() {
    
    
    const [timetable , setTimetable] = useState([])
    //const [question, setQuestion] = useState({id:0,question : "",category:{ id: 0,
   // categoryName: ""}})

   const store = useSelector((store) => store)
   const navigate = useNavigate()

    useEffect(()=>{
        if (!store.admin.isAuthenticated) {
            navigate('/');
        }
        else{
            loadtimetable()
        }
       
    },[])

   

    const loadtimetable = async () => {

        try{
            const response = await getTimetable()
       

            if (response['status'] === 200) {
              
               setTimetable(response['data'])
              
              } else {
                toast.error('Error while calling get timetable api')
              }
        }
        catch{
            toast.error('no timetable to load')
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
                        <span className='gradient__text'>Timetable</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Timetable</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                                        <div className="table-responsive" style={{ border: "1px solid #ccc", backgroundColor:"#f9f9f9"}} >
           
           <center>
           <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2", width:"100%"}}>
           <thead >

           {/* private LocalDate startDate;
	
	private LocalDate endDate;
	
    private String subjectName;
	
	private String facultyName;
          */}
               <tr className='table-primary'>
               <th><h2><b>No</b></h2></th>
                 <th><h2><b>Start date</b></h2></th>
                 <th><h2><b>End date</b></h2></th>
                 <th ><h2><b>Subject</b></h2></th>
                 <th ><h2><b>Faculty</b></h2></th>
               </tr>
             </thead>
           <tbody>
              {
                   timetable.map((t)=>{

                       
                       return(

                          
                           <tr key={t.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                               <td><h2 style={{display : "inline-block",color : "black",}}>{t.id} </h2></td>
                               <td> 
                               <h2 style={{display : "inline-block",color : "black",}}>{t.startDate}</h2>
                               </td>
                               <td> 
                               <h2 style={{display : "inline-block",color : "black",}}>{t.endDate}</h2>
                               </td>
                               <td> 
                               <h2 style={{display : "inline-block",color : "black",}}>{t.subjectName}</h2>
                               </td>
                               <td> 
                               <h2 style={{display : "inline-block",color : "black",}}>{t.facultyName}</h2>
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

export default ViewTimetable;