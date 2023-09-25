package com.app.service;

import java.util.List;


import com.app.dto.AssignmentDto;
import com.app.dto.ScheduleAssignmentDto;
import com.app.dto.SetFeedbackRespDto;
//import com.app.dto.ExamDTO;
//import com.app.dto.FeedbackDTO;
import com.app.dto.StudentAddDto;
import com.app.dto.StudentFeedbackAddDto;
import com.app.dto.StudentFeedbackRespDto;
//import com.app.dto.StudentAttendanceDTO;
//import com.app.dto.StudentDTO;
import com.app.dto.StudentRespDto;
import com.app.dto.StudentSignInRequest;
import com.app.dto.StudentSignInResponse;
import com.app.entities.Student;
import com.app.entities.StudentAttendance;

public interface StudentService {
	
	//List<StudentAttendanceDTO> getAllAttendance(Long studentId);
	//FeedbackDTO updateFeedback(Long facultyId,Long studentId,FeedbackDTO feedback);
	//List<ExamDTO> getExamDetails(Long studentId);
	Student getStudentById(Long studentId);
	StudentRespDto UpdateStudentDetails(Long studId,StudentAddDto dto);
	//student give feedback
		StudentFeedbackRespDto giveFeedbackToFaculty(StudentFeedbackAddDto s);
		
	//Student api - view feedback
	StudentFeedbackRespDto getFeedbackOfStudentForFaculty(Long sid,Long fid);
	// student api : view assignment
	List<AssignmentDto> viewAssignments(Long sid);
	
	List<SetFeedbackRespDto> getAllScheduledAssignmentForStudent(Long sid);
	StudentSignInResponse signInStudent(StudentSignInRequest signRequest);
}
