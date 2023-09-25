import React from 'react';

// import {useDispatch,useSelector} from 'react-redux'
import {Route, Routes, } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import setAuthToken from './redux/utils/setAuthToken'
//import store from './redux/store'








import Admin from './components/Admin/Admin';
import AdminLogout from './components/Admin/AdminLogout';
import AddCourse from './components/Admin/AddCourse';
import AddSubject from './components/Admin/AddSubject';
import AddStudent from './components/Admin/AddStudent';
import AddFaculty from './components/Admin/AddFaculty';
//import DeleteStudent from './components/DeleteStudent'; // remaining
import AddCategory from './components/feedback/AddCategory';
import ViewAllCategories from './components/feedback/ViewAllCategories';
import AddQuestion from './components/feedback/AddQuestion';
import ViewAllQuestions from './components/feedback/ViewAllQuestions';
import EditQuestion from './components/feedback/EditQuestion';
import ViewAllStudents from './components/Admin/ViewAllStudents';
import ViewAllFaculty from './components/Admin/ViewAllFaculty';
import ScheduleFeedback from './components/feedback/ScheduleFeedback'
import AddTimetable from './components/Admin/AdminTT';
import AddSyllabus from './components/Admin/AdminSyllabus';
import ViewSyllabus from './components/Admin/ViewSyllabus';
import ViewTimetable from './components/Admin/ViewTimetable';

import AddScheduledAssignment from './components/Faculty/AddScheduledAssignment';
import ViewAllScheduledAssignment from './components/Faculty/ViewAllScheduledAssignments'
import ViewAllStudentAssignment from './components/Faculty/ViewAllStudentAssignment'
import ViewAllStudentFeedbacks from './components/Faculty/ViewAllStudentFeedbacks'
// import DownloadFile from './components/student/downloadFile'
import FacultyAcademic from './components/Faculty/facultyAcademic';
import FacultyLogin from './components/Login/FacultyLogin';
import PostFacultyAcademics from './components/Faculty/postFacultyAcademics';
import FacultyDetails from './components/Faculty/facultyDetails'
import FacDownloadFile from './components/Faculty/downloadFile'
import UpdateFacultyAcademics from './components/Faculty/updateFacultyAcademics'
import UpdateFacultyDetails from './components/Faculty/updateFacultyDetails'
import PostFacultyDetails from './components/Faculty/postFacultyDetails'
import FacUploadFile from './components/Faculty/uploadFile'
import FacTimetable from './components/Faculty/timetable'
import FacSyllabus from './components/Faculty/syllabus'
import PostAddAttByFaculty from './components/Faculty/postFacultyAddAtt'

import Faculty from './components/Faculty/faculty';

import FacultyLogout from './components/Faculty/facultyLogout';



import StudentLogin from './components/Login/StudentLogin';
import StudentDetails from './components/student/studentDetails';
import StudentAcademic from './components/student/studentAcademic';
import PostStudentDetails from './components/student/postStudentDetails';
import PostStudentAcademics from './components/student/postStudentAcademics';
import Timetable from './components/student/timetable';
import UpdateStudentDetails from './components/student/updateStudentDetails';
import UpdateStudentAcademics from './components/student/updateStudentAcademics';
import UploadFile from './components/student/uploadFile';
import StudAttendace from './components/student/studAttendance';
import Syllabus from './components/student/syllabus';
import Student from './components/student/student';
import DownloadFile from './components/student/downloadFile'
import StudentLogout from './components/student/studentLogout';





import ViewScheduledFeedbackForStudent from './components/student/ViewScheduledFeedbackForStudent'
import GiveFeedback from './components/student/GiveFeedback'


//import { useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Exam from './components/Exam/Exam';
import AddExam from './components/Exam/AddExam';
import App2 from './src2/App2';
import AdminLogin from './components/Login/AdminLogin';
//import Admin from './components/Exam/testimage';

import { logoutAdminApi } from './services/admin';
import { logoutFacultyApi } from './services/Faculty/facultyLoginService';
import { logoutStudent } from './redux/action/studentAction';
import jwt_decode from 'jwt-decode';
import setAuthToken from './redux/utils/setAuthToken';
import store from './redux/store'












if (window.localStorage.facultyJwtToken) {
  setAuthToken(localStorage.facultyJwtToken);
  const decoded = jwt_decode(localStorage.facultyJwtToken);

  // dispatch(loginAdmin())
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    logoutFacultyApi(store.dispatch())
    window.location.href = '/';
  } 
} else  if (window.localStorage.studentJwtToken) {
  setAuthToken(localStorage.studentJwtToken);
  const decoded = jwt_decode(localStorage.studentJwtToken);

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutStudent());
    window.location.href = '/';
  } 
} else if (window.localStorage.adminJwtToken) {
  setAuthToken(localStorage.adminJwtToken);
  const decoded = jwt_decode(localStorage.adminJwtToken);

  // dispatch(loginAdmin())
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    logoutAdminApi(store.dispatch())
    window.location.href = '/';
  } 
} 












function App() {
  return (
    <div>
      <div>

  
        <Routes>
             {/* product-gallery component */}
             {/* <Route path='/product-gallery' element={<ProductGallery />} /> */}

             {/* add course component */}
             <Route path='/admin' element={<Admin/>}></Route>
             <Route path='/admin/logout' element={<AdminLogout/>}></Route>
             <Route path='/admin/addcourse' element={<AddCourse/>}></Route>
             <Route path='/admin/addsubject' element={<AddSubject/>}></Route>
             <Route path='/admin/addstudent' element={<AddStudent/>}></Route>
             <Route path='/admin/allstudents' element={<ViewAllStudents/>}></Route>
            
             <Route path='/admin/addfaculty' element={<AddFaculty/>}></Route>
             <Route path='/admin/allfaculty' element={<ViewAllFaculty/>}></Route>
             
             
             <Route path='/admin/addcategory' element={<AddCategory/>}></Route>
             <Route path='/admin/allcategory' element={<ViewAllCategories/>}></Route>
             <Route path='/admin/addquestion' element={<AddQuestion/>}></Route>
             <Route path='/admin/allquestion' element={<ViewAllQuestions/>}></Route>
             <Route path='/admin/editquestion' element={<EditQuestion/>}></Route>
             
             <Route path='/admin/addSyllabus' element={<AddSyllabus/>}></Route>
             <Route path='/admin/addTimetable' element={<AddTimetable/>}></Route>
             <Route path='/admin/schedulefeedback' element={<ScheduleFeedback/>}></Route>
             <Route path='/admin/syllabus' element={<ViewSyllabus/>}></Route>
             <Route path='/admin/timetable' element={<ViewTimetable/>}></Route>

             <Route path='/admin/exam' element={<Exam></Exam>}></Route>
             <Route path='/admin/exam/addexam' element={<AddExam></AddExam>}></Route>

             <Route path='/admin/login' element = {<AdminLogin></AdminLogin>}></Route>
             

              {/* faculty */}
            <Route path='/faculty/addscheduleassignment' element={<AddScheduledAssignment/>}></Route>
            <Route path='/faculty/allscheduleassignment' element={<ViewAllScheduledAssignment/>}></Route>
            <Route path='/faculty/allstudentassignment' element={<ViewAllStudentAssignment/>}></Route>
            <Route path='/faculty/allstudentfeedbackforfaculty' element={<ViewAllStudentFeedbacks/>}></Route>
            <Route path='/faculty/login' element={<FacultyLogin />} />
            <Route path='/faculty/home' element={<Faculty />} />
            <Route path='/faculty/syllabus' element={<FacSyllabus />} />
            <Route exact path='/faculty/facultydetails' element={<FacultyDetails />} />
            <Route exact path='/faculty/addfacultyacademics' element={<PostFacultyAcademics />} />
            <Route exact path='/faculty/addfacultydetails' element={<PostFacultyDetails />} />
            <Route exact path='/faculty/facultyacademics' element={<FacultyAcademic />} />
            <Route exact path='/faculty/timetable' element={<FacTimetable />} />
            <Route exact path='/faculty/editDetails' element={<UpdateFacultyDetails />} />
            <Route exact path='/faculty/updatefacultyaca' element={<UpdateFacultyAcademics />} />
            <Route exact path='/faculty/image' element={<FacUploadFile />} />
            <Route exact path='/faculty/getimage' element={<FacDownloadFile />} /> 
            <Route exact path='/faculty/addattendance' element={<PostAddAttByFaculty />} />
            <Route exact path='/faculty/logout' element={<FacultyLogout />} />
           
            {/* <Route path='/editscheduledassignment' element={<EditScheduledAssignment/>}></Route> */}


            {/* student (not added in navbar)*/} 
            <Route path='/student/allScheduledFeedbacksForStudent' element={<ViewScheduledFeedbackForStudent/>}></Route>
            <Route path='/student/giveFeedback' element={<GiveFeedback/>}></Route>
            <Route path='/student/login' element={<StudentLogin />} />
            <Route path='/student/home' element={<Student />} />
            <Route path='/student/syllabus' element={<Syllabus />} />
            <Route exact path='/student/studentdetails' element={<StudentDetails />} />
            <Route exact path='/student/studentAcademics' element={<StudentAcademic />} />
            <Route exact path='/student/addstudentdetails' element={<PostStudentDetails />} />
            <Route exact path='/student/addstudentacademics' element={<PostStudentAcademics />} />
            <Route exact path='/student/timetable' element={<Timetable />} />
            <Route exact path='/student/editDetails' element={<UpdateStudentDetails />} />
            <Route exact path='/student/updatestudentaca' element={<UpdateStudentAcademics />} />
            <Route exact path='/student/image' element={<UploadFile />} />
            <Route path='/student/attendance' element={<StudAttendace />} />
            <Route exact path='/student/getimage' element={<DownloadFile />} /> 
            <Route exact path='/student/logout' element={<StudentLogout />} /> 


             

             <Route path='/' element = {<App2></App2>}></Route>

             {/* <Route path='/image' element = {<Admin></Admin>}></Route> */}

        </Routes>
        </div>
        <ToastContainer />
    </div>
  );
}

export default App;
