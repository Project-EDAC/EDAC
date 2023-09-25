import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have React Router installed and configured
import '../style.css';

function StudentSideBar() {
  return (
    <div className="sidebar col-md-3 col-md-offset-1">
      

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Student Details</h3>
        <ul className="arrow-list">
          <li><Link to="/student/studentdetails">View Details</Link></li>
          <li><Link to="/student/addstudentdetails">Add Details</Link></li>
          <li><Link to="/student/editDetails"> Edit Details</Link></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Student Academics</h3>
        <ul className="arrow-list">
          <li><Link to="/student/studentAcademics">View Academics</Link></li>
          <li><Link to="/student/addstudentacademics">Add Academics</Link></li>
          <li><Link to="/student/updatestudentaca">Edit Academics</Link></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Other</h3>
        <ul className="arrow-list">
        <li><Link to="/student/home">Student</Link></li>
          <li><Link to="/student/timetable">view Timetable</Link></li>
          <li><Link to="/student/attendance">View Attendance</Link></li>
          <li><Link to="/student/syllabus">View Syllabus</Link></li>
          <li><Link to="/student/image">Add Passport Photo</Link></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Feedback</h3>
        <ul className="arrow-list">
          <li><Link to="/student/allScheduledFeedbacksForStudent">Scheduled Feedbacks</Link></li>
          
        </ul>
      </div>
     
      

    </div>
  );
}

export default StudentSideBar;
