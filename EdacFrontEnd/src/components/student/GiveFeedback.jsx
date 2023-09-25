import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useLocation } from "react-router-dom";
import { log } from '../../utils/utils';
import Header from '../Header/Header'
import StudentSideBar from '../SideBar/StudentSideBar'
import Footer from '../Footer/Footer'
import { useSelector } from 'react-redux'
import { giveFeedback } from '../../services/student';



function GiveFeedback() {


    // private Long studentId;
	
	// private Long scheduledFeedbackId;
	
	// private List<FeedbackAnswerForStudentDto> answers = new ArrayList<>();
	
	
	// private LocalDate feedbackDate;
	
	
	// private String extraComment;


    const location = useLocation();
    var copyOfFeedback = location.state.copyOfFeedback;


    
  
    const [categories, setCategories] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [extraComment, setExtraComment] = useState('')


    const navigate = useNavigate();
    const store = useSelector((store) => store)

  
    useEffect(() => {
        log(copyOfFeedback+"in give feedback")
        if (!store.student.isAuthenticated) {
          navigate('/');
        }
        else{
          loadFunction();
        }
      
    }, []);
  
    const loadFunction = () => {
    //     log(location.state.copyOfFeedback)
        log(location.state.copyOfFeedback.categories)
    //     log(location.state.copyOfFeedback.categories.questions)
    //   setQuestions(location.state.copyOfFeedback.categories.questions);
    setCategories(location.state.copyOfFeedback.categories)

};
  
    const handleRadioChange = (questionId, selectedOption) => {
      setSelectedAnswers(prevAnswers => ({
        ...prevAnswers,
        [questionId]: selectedOption,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Here you can perform actions with the selectedAnswers state, like sending it to an API.
      console.log(selectedAnswers);
      const answers = Object.keys(selectedAnswers).map(questionId => {
        return {
           answer: selectedAnswers[questionId],
          questionid: questionId  
        };
      });
      log(answers)
      // get student id from session storage
      var studentId = parseInt(sessionStorage.getItem("id"),10);

      var scheduledFeedbackId =  sessionStorage.getItem("sheduledFeedbackid")
      const currentDate = new Date()
      //var feedbackDate = currentDate.toDateString()
      const feedbackDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;

      log(scheduledFeedbackId)
      log(answers)
      log(feedbackDate)
      log(extraComment)
      
      const response = await giveFeedback(
                studentId,
                scheduledFeedbackId,
                answers,
                feedbackDate,
                extraComment
      )

      if(response['status'] == 200)
            {
               
                toast.success('Successfully submitted feedback')
                navigate('/student/allScheduledFeedbacksForStudent')
              //  clearTextBox()
                
            }
            else{
                toast.error('Error while updating a new question, please try again')
            }
    };
  
    return (
      <>

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
            <a href="/student/home">student</a>
            {/* <a href="/faculty/allscheduleassignment">Scheduled assignments</a> */}
            <span className='gradient__text'>Give Feedback</span>
          </div>
          <div className="fullwidth-block">
            <div className="row">
              <div className="content col-md-8">
                <div className="post">
                  <div>
                    <h1 className='gradient__text' style={{ textAlign: "center", margin: 10 }}>Give Feedback</h1>

                    <div className="row">
                      <div className="col">
                        <div className="form" style={{color:"white"}}>
                        <div>
        {categories.map(category => (
                    <div key={category.id} >
                        <h4 style={{color:"white"}}><b>{category.categoryName}</b></h4>

                        {category.questions.map(question => (
                        <div key={question.id} style={{color:"white"}}>
                            <h5 style={{color:"white"}}><b>{question.question}</b></h5> 
                            {['BAD', 'AVG', 'GOOD'].map(option => (
                                    
                            <label key={option}>
                              
                                <input
                                type="radio"
                                value={option}
                                checked={selectedAnswers[question.id] === option}
                                onChange={() => handleRadioChange(question.id, option)}
                                />&nbsp;
                                {option} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                           
                            ))}
                        </div>
                        ))}
                    </div>
                    ))}
                    Extra Comment :
                    <textarea class="form-control" id="textAreaExample" rows="3" onChange={(e) => {
				setExtraComment(e.target.value)
			}} ></textarea>
        </div>
        
                          <br />
                          <button onClick={handleSubmit} className="btn btn-success"
                           style={{
                            padding: "10px 30px",
                            color: "#fff",
                            borderRadius: "5px",
                            border: "solid #fff 1px",
                            marginTop: "25px",
                            opacity: 0.7,
                          }}>
                          Submit
                          </button>
                          
                        </div>
                      </div>
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


        {/* <div className="container" style={{marginTop: 100}}>
        <div>
        {categories.map(category => (
                    <div key={category.id}>
                        <h4><b>{category.categoryName}</b></h4>

                        {category.questions.map(question => (
                        <div key={question.id}>
                            <h5><b>{question.question}</b></h5> 
                            {['BAD', 'AVG', 'GOOD'].map(option => (
                                    
                            <label key={option}>
                              
                                <input
                                type="radio"
                                value={option}
                                checked={selectedAnswers[question.id] === option}
                                onChange={() => handleRadioChange(question.id, option)}
                                />&nbsp;
                                {option} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </label>
                           
                            ))}
                        </div>
                        ))}
                    </div>
                    ))}
                    Extra Comment :
                    <textarea class="form-control" id="textAreaExample" rows="3" onChange={(e) => {
				setExtraComment(e.target.value)
			}} ></textarea>
        </div>
        <button className='btn btn-success' onClick={handleSubmit} style={{marginTop:10}}>Submit</button>
        </div>
                   
                   */}


       
      </>
    );
}

export default GiveFeedback;