import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have React Router installed and configured
import '../style.css';

function FacultySideBar() {
  return (
    <div className="sidebar col-md-3 col-md-offset-1">
      

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Faculty Details</h3>
        <ul className="arrow-list">
          <li><Link to="/faculty/addfacultydetails">Add Details</Link></li>
          <li><Link to="/faculty/facultydetails">View Details</Link></li>
          <li><Link to="/faculty/editDetails">Edit Details</Link></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Faculty Academics</h3>
        <ul className="arrow-list">
          <li><Link to="/faculty/addfacultyacademics">Add Academics</Link></li>
          <li><Link to="/faculty/facultyacademics">View Academics</Link></li>
          <li><Link to="/faculty/updatefacultyaca">Edit Academics</Link></li>
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Assignment</h3>
        <ul className="arrow-list">
          <li><Link to="/faculty/addscheduleassignment">Add Scheduled Assignment</Link></li>
          <li><Link to="/faculty/allscheduleassignment">View Scheduled Assignments</Link></li>
          <li><Link to="/faculty/allstudentassignment">View Student Assignments</Link></li>
          
        </ul>
      </div>
     
      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Feedback</h3>
        <ul className="arrow-list">
        <li><Link to="/faculty/allstudentfeedbackforfaculty">Student Feedback</Link></li>
          
        </ul>
      </div>

      <div className="widget">
        <h3 className="widget-title"style={{color:"white"}}>Other</h3>
        <ul className="arrow-list">
        <li><Link to="/faculty/home">Faculty</Link></li>
          {/* <li><Link to="/admin/faculty/add">Add Syllabus</Link></li> */}
          <li><Link to="/faculty/syllabus">View syllabus</Link></li>
          <li><Link to="/faculty/timetable">View Timetable</Link></li>
          <li><Link to="/faculty/addattendance">Add Student Attendance</Link></li>
          <li><Link to="/faculty/image">Add Passport Photo</Link></li>
          {/* <li><Link to="/admin/faculty/attendance">Attendance</Link></li> */}
        </ul>
      </div>

      


    </div>
  );
}

export default FacultySideBar;
