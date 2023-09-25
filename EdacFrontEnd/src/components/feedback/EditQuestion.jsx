import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLocation } from "react-router-dom";
import { updateQuestion as updateQuestionApi } from "../../services/feedback";
import Header from '../Header/Header'
import AdminSideBar from '../SideBar/AdminSideBar'
import Footer from '../Footer/Footer'

import { useSelector } from 'react-redux'

function EditQuestion() {

    const location = useLocation();
    var copyOfQuestion = location.state.copyOfQuestion

    const [editedquestion,setEditedQuestion] = useState('')
    const [categoryid,setCategoryId] = useState(0)
    
    const navigate = useNavigate();
    const store = useSelector((store) => store)


    useEffect(()=>{

      if (!store.admin.isAuthenticated) {
        navigate('/');
    }
    else{
      loadFunction()
    }
      
    },[])

    const loadFunction = () => {
        setEditedQuestion(copyOfQuestion.question)
        setCategoryId(copyOfQuestion.category.id)
    }


     debugger
    const updateQuestion = async ()=>{
        if(editedquestion.length === '')
        {
            toast.error('please enter question')
        }
        else if(categoryid === 0)
        {
            toast.error('please enter category id')
        }
        else{
            const response = await updateQuestionApi(
                copyOfQuestion.id,
                editedquestion,
                categoryid
            )

            if(response['status'] == 200)
            {
               
                toast.success('Successfully updated a question')
                navigate('/admin/allquestion')
              //  clearTextBox()
                
            }
            else{
                toast.error('Error while updating a new question, please try again')
            }
        }
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
            <span className='gradient__text'>Edit Question</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Edit Question</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form">
                        <div className="mb-2" >
                            <label ><h3>Question</h3></label>
                            <input type="text" className="form-control"
                                name="question_name"
                                placeholder="Question Name"
                                value={editedquestion}
                                onChange={(e) => {
                                    setEditedQuestion(e.target.value)
                                }}
                                ></input>
                        </div>
                        
                        <div className="mb-2" >
                            <label ><h3>Category Id</h3></label>
                            <input type="text" className="form-control"
                                name="categoryid"
                                placeholder="category Id"
                                value={categoryid}
                                onChange={(e) => {
                                    setCategoryId(e.target.value)
                                }}
                                ></input>
                        </div>

                          <br />
                          <button onClick={updateQuestion} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                            Update question
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

        {/* <div className="container" style={{marginTop: 100}}>
        <div  >
            <div style={{marginLeft: 450 , color: "blue"}}><h1>Update Feedback Question</h1></div>
        <div className="form-group" style={{marginBottom: 20}}>
            <label ><h3>Question</h3></label>
            <input type="text" className="form-control"
                name="question_name"
                placeholder="Question Name"
                value={editedquestion}
                onChange={(e) => {
                    setEditedQuestion(e.target.value)
                }}
                ></input>
        </div>
        
        <div className="form-group" style={{marginBottom: 20}}>
            <label ><h3>Category Id</h3></label>
            <input type="text" className="form-control"
                name="categoryid"
                placeholder="category Id"
                value={categoryid}
                onChange={(e) => {
                    setCategoryId(e.target.value)
                }}
                ></input>
        </div>

        <div>
            <button className="btn btn-primary"
            onClick={updateQuestion}>
               Update Question
            </button>
        </div>
        </div>
        </div> */}
    </> );
}

export default EditQuestion;