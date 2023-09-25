import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
//import { getStudents,deleteStudent as deleteStudentApi } from '../../services/admin'
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
import { getFaculties, deleteFaculty as deleteFacultyApi } from '../../services/admin'
import { useSelector } from 'react-redux'

function ViewAllFaculty() {
    const [faculties , setFaculties] = useState([])
    const [searchText,setSearchText] =  useState("");
    //const [question, setQuestion] = useState({id:0,question : "",category:{ id: 0,
   // categoryName: ""}})

    const navigate = useNavigate();
    const store = useSelector((store) => store)

    useEffect(()=>{
        if (!store.admin.isAuthenticated) {
			navigate('/');
		}
        else{
            loadfaculties()
        }
        
    },[])

   

    const loadfaculties = async () => {

        try{
            const response = await getFaculties()
       

            if (response['status'] === 200) {
              
                setFaculties(response['data'])
              
              } else {
                toast.error('Error while calling get faculty api')
              }
        }
        catch(error)
        {
            toast.error('No faculties to load')
        }


    }


    const deleteFaculty = async (id) =>{
         
        const response = await deleteFacultyApi(id)
        log(response)
        if (response['status'] === 200) {
            
            toast.error('faculty deleted successfully')
            loadfaculties()
           
           } else {
             toast.error('Error while calling delete Faculty api')
           }

    }



            
    const onSearch=(args)=>{
        debugger;
        setSearchText(args.target.value);
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
                        <a href="/admin">admin</a>
                        <span className='gradient__text'>All faculty</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1  className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Faculty List</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                                        <div className="table-responsive">
            <div style={{float: "right", marginBottom : 30}}>
                  <b style={{color:"white"}}>Search:</b> &nbsp;&nbsp;
                        <input type='text' 
                        style={{height: 30}}
                               value={searchText}
                               placeholder='search by name' 
                               onChange={onSearch}/>
                        <br></br>
                    </div>
                <center>
                <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
                <thead >
                    <tr className='table-primary'>
                      <th><h2><b>Id</b></h2></th>
                      <th><h2><b>FirstName</b></h2></th>
                      <th><h2><b>LastName</b></h2></th>
                      <th><h2><b>Email</b></h2></th>
                      <th colSpan={2}><h4><b>Actions</b></h4></th>
                    </tr>
                  </thead>
                <tbody>
                   {
                        faculties.map((faculty)=>{


                            if(searchText!="")
                            {
                                debugger;
                                if(faculty.firstName.toLowerCase().
                                includes(searchText.toLowerCase()))
                                {
                                    return(
                                        <tr key={faculty.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                        <td><h3 style={{display : "inline-block",color : "black",}}>{faculty.id} </h3></td>
                                        <td> 
                                        <h3 style={{display : "inline-block",color : "black",}}>{faculty.firstName}</h3>
                                        </td>
                                        <td> 
                                        <h3 style={{display : "inline-block",color : "black",}}>{faculty.lastName}</h3>
                                        </td>
                                        <td> 
                                        <h3 style={{display : "inline-block",color : "black",}}>{faculty.email}</h3>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={()=>{deleteFaculty(faculty.id)}}style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>Delete</button>
                                        </td>
                                        
                                     </tr>
                                    )
                                }
                                else
                                {
                                    return;
                                }
                                
                            }

                            {
                            return(

                               
                                <tr key={faculty.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h3 style={{display : "inline-block",color : "black",}}>{faculty.id} </h3></td>
                                    <td> 
                                    <h3 style={{display : "inline-block",color : "black",}}>{faculty.firstName}</h3>
                                    </td>
                                    <td> 
                                    <h3 style={{display : "inline-block",color : "black",}}>{faculty.lastName}</h3>
                                    </td>
                                    <td> 
                                    <h3 style={{display : "inline-block",color : "black",}}>{faculty.email}</h3>
                                    </td>
                                    <td >
                                        <button className='btn btn-danger' onClick={()=>{deleteFaculty(faculty.id)}}style={{
                                  padding: "10px 30px",
                                  color: "#fff",
                                  borderRadius: "5px",
                                  border: "solid #fff 1px",
                                  marginTop: "25px",
                                  opacity: 0.7,
                                }}>Delete</button>
                                    </td>
                                    
                                 </tr>
                                
                                )
                            }
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
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >All Faculty</b></h1>
            </center>
        </div>

        <div >
            <div className="table-responsive">
            <div style={{float: "right", marginBottom : 30}}>
                  <b>Search:</b> 
                        <input type='text' 
                               value={searchText}
                               placeholder='search by name' 
                               onChange={onSearch}/>
                        <br></br>
                    </div>
                <center>
                <table  className="table table-striped table-hover" style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
                <thead >
                    <tr className='table-primary'>
                      <th><h4><b>Id</b></h4></th>
                      <th><h4><b>FirstName</b></h4></th>
                      <th><h4><b>LastName</b></h4></th>
                      <th><h4><b>Email</b></h4></th>
                      <th colSpan={2}><h4><b>Actions</b></h4></th>
                    </tr>
                  </thead>
                <tbody>
                   {
                        faculties.map((faculty)=>{


                            if(searchText!="")
                            {
                                debugger;
                                if(faculty.firstName.toLowerCase().
                                includes(searchText.toLowerCase()))
                                {
                                    return(
                                        <tr key={faculty.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                        <td><h5 style={{display : "inline-block",color : "black",}}>{faculty.id} </h5></td>
                                        <td> 
                                        <h5 style={{display : "inline-block",color : "black",}}>{faculty.firstName}</h5>
                                        </td>
                                        <td> 
                                        <h5 style={{display : "inline-block",color : "black",}}>{faculty.lastName}</h5>
                                        </td>
                                        <td> 
                                        <h5 style={{display : "inline-block",color : "black",}}>{faculty.email}</h5>
                                        </td>
                                        <td>
                                            <button className='btn btn-danger' onClick={()=>{deleteFaculty(faculty.id)}}>Delete</button>
                                        </td>
                                        
                                     </tr>
                                    )
                                }
                                else
                                {
                                    return;
                                }
                                
                            }

                            {
                            return(

                               
                                <tr key={faculty.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h5 style={{display : "inline-block",color : "black",}}>{faculty.id} </h5></td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{faculty.firstName}</h5>
                                    </td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{faculty.lastName}</h5>
                                    </td>
                                    <td> 
                                    <h5 style={{display : "inline-block",color : "black",}}>{faculty.email}</h5>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{deleteFaculty(faculty.id)}}>Delete</button>
                                    </td>
                                    
                                 </tr>
                                
                                )
                            }
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

export default ViewAllFaculty;