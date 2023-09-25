import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have React Router installed and configured
import '../style.css';

function AdminSideBar() {
  return (
    <div className="sidebar col-md-3 col-md-offset-1">
      
      <div className="widget">
        <h3 className="widget-title" style={{color:"white"}}>Feedback</h3>
        <ul className="arrow-list">
        <li><Link to="/admin/addcourse">Add Course</Link></li>
          <li><Link to="/admin/addcategory">Add Category</Link></li>
          <li><Link to="/admin/allcategory">View Category</Link></li>
          <li><Link to="/admin/addquestion">Add Question</Link></li>
          <li><Link to="/admin/allquestion">View Questions</Link></li>
          <li><Link to="/admin/schedulefeedback">Schedule Feedback</Link></li>
        </ul>
      </div>
     
      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Faculty</h3>
        <ul className="arrow-list">
          <li><Link to="/admin/addfaculty">Add Faculty</Link></li>
          <li><Link to="/admin/allfaculty">View Faculty</Link></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Student</h3>
        <ul className="arrow-list">
          <li><Link to="/admin/addstudent">Add Student</Link></li>
          <li><Link to="/admin/allstudents">View Students</Link></li>
        </ul>
      </div>
      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Exam</h3>
        <ul className="arrow-list">
          <li><Link to="/admin/exam">View Exam</Link></li>
          <li><Link to="/admin/exam/addexam">Add Exam</Link></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Other</h3>
        <ul className="arrow-list">
          <li><Link to="/admin/addsubject">Add Subject</Link></li>
          <li><Link to="/admin/addcourse">Add Course</Link></li>
          <li><Link to="/admin/addTimetable">Add Timetable</Link></li>
          <li><Link to="/admin/addSyllabus">Add Syllabus</Link></li>
          <li><Link to="/admin/syllabus">view syllabus</Link></li>
          <li><Link to="/admin/timetable">view Timetable</Link></li>
        </ul>
      </div>

      

    </div>
  );
}

export default AdminSideBar;
