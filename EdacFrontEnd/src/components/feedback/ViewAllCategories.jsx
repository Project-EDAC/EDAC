import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { getCategories , deleteCategory as deleteCategoryApi} from '../../services/feedback'
import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ViewAllCategories() {

    const [categories , setCategories] = useState([])
    const [searchText,setSearchText] =  useState("");

    const store = useSelector((store) => store)
    const navigate = useNavigate()

    useEffect(()=>{
        if (!store.admin.isAuthenticated) {
            navigate('/');
        }
        else{
            loadCategories()
        }

       
    },[])

    useEffect(()=>{

    },[searchText])

    const loadCategories = async () => {

        try{
            const response = await getCategories()
            //log(response)
    
            if (response['status'] === 200) {
               // log(response['data'])
               const arrayCategories = response['data']
               log(arrayCategories)
                setCategories(arrayCategories)
               // log(categories)
              } else {
                toast.error('Error while calling get category api')
              }
        }
        catch{
            
        }
       


    }


    const deleteCategory = async (id) =>{
         
        const response = await deleteCategoryApi(id)
        log(response)
        if (response['status'] === 200) {
            
            toast.error('Category deleted successfully')
            loadCategories()
           
           } else {
             toast.error('Error while calling delete category api')
           }

    }


    // const onSearch=(args)=>{
    //     debugger;
    //     setSearchText(args.target.value);
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
                        <span className='gradient__text'>categories</span>
                    </div>
                </div>

                <div className="fullwidth-block">
                    <div className="container">
                        <div className="row">
                            <div className="content col-md-8">
                                <div className="post">
                                    <div>
                                        <h1 className="gradient__text" style={{ textAlign: 'center', margin: 10 }}>Category List</h1>

                                        {/* <button type="button" className="btn btn-large btn-block btn-info" onClick={addExam}>Add Exam</button> */}
                                        <br /><br />

                                        <div className="table-responsive" >
           
                <center>
                <table className=' table table-bordered Attendance-style' style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
                <thead >
                    <tr className='table-primary'>
                      <th><h2><b>Id</b></h2></th>
                      <th><h2><b>Category</b></h2></th>
                      <th colSpan={2}><h2><b>Actions</b></h2></th>
                    </tr>
                  </thead>
                <tbody>
                   {
                        categories.map((category)=>{

                            
                           
                            return(

                               
                                <tr key={category.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h2 style={{display : "inline-block",color : "black",}}>{category.id} </h2></td>
                                    <td> 
                                    <h2 style={{display : "inline-block",color : "black",}}>{category.categoryName}</h2>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{deleteCategory(category.id)}}
                                         style={{
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
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >All Categories</b></h1>
            </center>
        </div>

        <div >
            <div className="table-responsive" >
            <div style={{float: "right", marginBottom : 30}}>
                    Search:
                        <input type='text' 
                               value={searchText} 
                               onChange={onSearch}/>
                        <br></br>
                    </div>
                <center>
                <table className=' table table-bordered Attendance-style' style={{textAlign:"center" , backgroundColor: "#F6F6F2"}}>
                <thead >
                    <tr className='table-primary'>
                      <th><h4><b>Id</b></h4></th>
                      <th><h4><b>Category</b></h4></th>
                      <th colSpan={2}><h4><b>Actions</b></h4></th>
                    </tr>
                  </thead>
                <tbody>
                   {
                        categories.map((category)=>{

                            if(searchText!="")
                            {
                                debugger;
                                if(category.categoryName.toLowerCase().
                                includes(searchText.toLowerCase()))
                                {
                                    return(<tr key={category.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h4 style={{display : "inline-block",color : "black",}}>{category.id} </h4></td>
                                    <td> 
                                    <h4 style={{display : "inline-block",color : "black",}}>{category.categoryName}</h4>
                                    </td>

                                   
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{deleteCategory(category.id)}}>Delete</button>
                                    </td>
                                    
                                 </tr>)
                                }
                                else
                                {
                                    return;
                                }
                                
                            }
                            {
                            return(

                               
                                <tr key={category.id} style={{textAlign:"center", backgroundColor:"#BADFE7"}}>
                                    <td><h4 style={{display : "inline-block",color : "black",}}>{category.id} </h4></td>
                                    <td> 
                                    <h4 style={{display : "inline-block",color : "black",}}>{category.categoryName}</h4>
                                    </td>
                                    <td>
                                        <button className='btn btn-danger' onClick={()=>{deleteCategory(category.id)}}>Delete</button>
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

export default ViewAllCategories;