import { useState,useEffect } from 'react'
import { toast } from 'react-toastify'
import { log } from '../../utils/utils'
import  "../../../node_modules/bootstrap/dist/css/bootstrap.css"
import { getCategories} from '../../services/feedback'
import { addQuestion as addQuestionApi } from '../../services/feedback'
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AddQuestion() {

   
    const [question,setQuestion] = useState('')
    const [categoryid,setCategoryId] = useState(0)
    const [categories, setCategories] = useState([]);
    const store = useSelector((store) => store)
    const navigate = useNavigate()


    useEffect(() => {
      // Check if user is not authenticated, and navigate if necessary
      if (!store.admin.isAuthenticated) {
          navigate('/');
      }
      else{
        loadCategories();
      }
  }, []);

    useEffect(()=>{

    },[question,categoryid])


    const addQuestion = async ()=>{

       
        if(question.length == '')
        {
            toast.error('please enter question')
        }
        else if(categoryid == 0)
        {
            toast.error('please enter category id')
        }
        else{

            //log(categoryName)
            const response = await addQuestionApi(question,categoryid)
            //log(response['status'])
            if(response['status'] == 201)
            {
               
                toast.success('Successfully added a new question')
                clearTextBox()
                
            }
            else{
                toast.error('Error while adding a new question, please try again')
            }
        }

    }


    const loadCategories = async () => {

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




    const clearTextBox = ()=>{
        setQuestion('')
        setCategoryId(0)
    }
	
	
	
    return ( <>
    
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
            <a href="/admin/allquestion">feedback questions</a>
            <span className='gradient__text'>Add Question</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Add Question</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className="mb-2" >
                            <label ><h3 style={{color:"white"}}>Question</h3></label>
                            <input type="text" className="form-control"
                                name="question_name"
                                placeholder="Question Name"
                                //value={user.first_name}
                                onChange={(e) => {
                                    setQuestion(e.target.value)
                                }}
                                ></input>
                        </div>
                        
                        <div className="mb-2">
                            <label ><h3 style={{color:"white"}}>Category</h3></label>
                            <select
                              name="category"
                              id="inputSubject"
                              className="form-control"
                              value={categoryid}
                              onChange={(e) => {
                                setCategoryId(e.target.value);
                              }}
                            >
                              <option value="">Select Category</option>
                              {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                  {category.categoryName}
                                </option>
                              ))}
                            </select>
                        </div>

                          <br />
                          <button onClick={addQuestion} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Add question
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


    {/* <div className='container' style={{marginTop : 40,paddingBottom: 10, marginLeft: 150 ,border: "1px solid #ccc", backgroundColor:"#f9f9f9"}}>
    <div style={{marginBottom :20}}>
            <center>
                <h1 style={{color:"black",marginLeft:70, paddingTop:10}}><b >Add Feedback Question</b></h1>
            </center>
        </div>
        <div style={{marginTop : 10,paddingBottom: 10, marginLeft: 10 ,border: "1px solid #ccc",padding:10}} >
            
        <div className="form-group" style={{marginBottom: 20}}>
            <label ><h3>Question</h3></label>
            <input type="text" className="form-control"
                name="question_name"
                placeholder="Question Name"
                //value={user.first_name}
                onChange={(e) => {
                    setQuestion(e.target.value)
                }}
                ></input>
        </div>
        
        <div className="form-group" style={{marginBottom: 20}}>
            <label ><h3>Category Id</h3></label>
            <input type="text" className="form-control"
                name="categoryid"
                placeholder="category Id"
                //value={user.first_name}
                onChange={(e) => {
                    setCategoryId(e.target.value)
                }}
                ></input>
        </div>

        <div>
            <button className="btn btn-primary"
            onClick={addQuestion}>
                Add Question
            </button>
        </div>
        </div>
        </div> */}
    </> );
}

export default AddQuestion;