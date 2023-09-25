import { useState , useEffect} from 'react'
import { toast } from 'react-toastify'
import { addCategory as addCategoryApi } from '../../services/feedback'

import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"

import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


function AddCategory() {
    const [categoryName, setCategoryName] = useState('')
    
    const store = useSelector((store) => store)
    const navigate = useNavigate()


    useEffect(() => {
      // Check if user is not authenticated, and navigate if necessary
      if (!store.admin.isAuthenticated) {
          navigate('/');
      }
  }, []);

    const addCategory = async () => {
        log(categoryName)
        if(categoryName.length == '')
        {
            toast.error('please enter category name')
        }
        else{

            log(categoryName)
            const response = await addCategoryApi(categoryName)
            log(response['status'])
            if(response['status'] == 201)
            {
                toast.success('Successfully added a new category')
            }
            else{
                toast.error('Error while adding a new category, please try again')
            }
        }
    }

    return (  <>


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
            <a href="/admin/allcategory">categories</a>
            <span className='gradient__text'>Add Category</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Category</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
						<div className="form-group" style={{marginBottom: 20}}>
                            <label ><h3 style={{color:"white"}}>Category Name</h3></label>
                            <input type="text" className="form-control"
                                name="category_name"
                                placeholder="Category Name"
                                //value={user.first_name}
                                onChange={(e) => {
                                    setCategoryName(e.target.value)
                                }}
                                ></input>
                        </div>

                          <br />
                          <button onClick={addCategory} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}
                          >
                            Add category
                          </button>
                          
                        </div>
                      </div>
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

{/* <div className='container' style={{marginTop : 50,paddingBottom: 20, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
        <div style={{marginBottom :50}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Add Category</b></h1>
            </center>
        </div>
        <div style={{marginTop : 50,paddingBottom: 10, marginLeft: 10 ,border: "1px solid #ccc",padding:10}}>
      
        <div className="form-group" style={{marginBottom: 20}}>
            <label ><h3>Category Name</h3></label>
            <input type="text" className="form-control"
                name="category_name"
                placeholder="Category Name"
                //value={user.first_name}
                onChange={(e) => {
                    setCategoryName(e.target.value)
                }}
                ></input>
        </div>
        
        <div>
            <button className="btn btn-primary"
            onClick={addCategory}>
                Add Category
            </button>
        </div>
        </div>
        </div> */}
    </>
    );
}

export default AddCategory;