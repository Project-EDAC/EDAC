package com.app.service;

import java.util.List;

import com.app.dto.AdminAddReq;
import com.app.dto.AdminAddResp;
import com.app.dto.AdminChangePwdRequest;
import com.app.dto.AdminChangePwdResponse;
import com.app.dto.AdminSignInRequest;
import com.app.dto.AdminSignInResponse;
import com.app.dto.ApiResponse;
import com.app.dto.AssignmentDto;
import com.app.dto.CourseDto;
import com.app.dto.ExamAddDto;
import com.app.dto.ExamRespDto;
import com.app.dto.FacultyAddDto;
import com.app.dto.FacultyRespDto;
import com.app.dto.FeedbackAddQuestion;
import com.app.dto.FeedbackCategoryDto;
import com.app.dto.FeedbackCategoryRespDto;
import com.app.dto.FeedbackRespQuestion;
import com.app.dto.ResponseTTDTO;
import com.app.dto.ScheduleAssignmentDto;
import com.app.dto.ScheduledAssignmentRespDto;
import com.app.dto.SetFeedbackDto;
import com.app.dto.SetFeedbackRespDto;
import com.app.dto.StudentAddDto;
import com.app.dto.StudentFeedbackAddDto;
import com.app.dto.StudentFeedbackRespDto;
import com.app.dto.StudentRespDto;
import com.app.dto.SubjectDto;
import com.app.dto.SubjectDtoList;
import com.app.entities.Course;
import com.app.entities.Event;
import com.app.entities.Faculty;
import com.app.entities.Student;
import com.app.entities.Subject;
import com.app.entities.Syllabus;
import com.app.entities.TimeTable;

public interface AdminService {
	
//	List<Employee> getAllEmployees();
//	Employee addEmpDetails(Employee emp);
//	Employee getEmpDetails(Long empId);
//	ApiResponse deleteEmpDetails(Long empId);
//	//add a method for emp signin
//	AuthResp authenticateEmp(AuthRequest request);
//	//emp sign up


	CourseDto addCourseDetails(CourseDto c);
	
	SubjectDto addSubjectDetails(SubjectDto s);
	ApiResponse removeSubjectDetails(Long subid);
	
	StudentRespDto addStudentDetails(StudentAddDto st);
	List<StudentRespDto> getAllStudent(); //new
	String deleteStudentDetails(Long sid);
	
	
	FacultyRespDto addFacultyDetails(FacultyAddDto f);
	List<FacultyRespDto> getAllFaculty();
	String deleteFacultyDetails(Long fid);
	
	
	
	
	ExamRespDto addExamDetails(ExamAddDto e);
	Event addEvent(Event e);
	
	String deleteExamDetails(Long eid);
	
	
//	TimeTable addTimetable(TimeTable t);

	
	FeedbackCategoryDto addFeedbackCategory(FeedbackCategoryDto f);
	List<FeedbackCategoryRespDto> getAllCategories(); //new
	ApiResponse removeFeedbackCategory(Long fcid);
	
	FeedbackRespQuestion addFeedbackQuestion(FeedbackAddQuestion q);
	List<FeedbackRespQuestion> getAllQuestions(); //new
	ApiResponse removeFeedbackQuestion(Long qid);
	FeedbackRespQuestion updateFeedbackQuestion(Long qid,FeedbackAddQuestion q);
	
	SetFeedbackRespDto scheduleFeedback(SetFeedbackDto f);
	List<StudentFeedbackRespDto> getFeedbacksByFacultyId(Long fid);
	
//	//student give feedback
//	StudentFeedbackRespDto giveFeedbackToFaculty(StudentFeedbackAddDto s);
//	
//	//Student api - view feedback
//	StudentFeedbackRespDto getFeedbackOfStudentForFaculty(Long sid,Long fid);
	
	
	//faculty api - schedule assignment
//	ScheduledAssignmentRespDto scheduleAssignment(ScheduleAssignmentDto s);
//	
//	String changeStatusOfAssignment(Long studentid, Long scheduledassignmentid);
//	
//	// student api : view assignment
//	List<AssignmentDto> viewAssignments(Long sid);
	
	AdminSignInResponse signInAdmin(AdminSignInRequest signRequest);

	AdminChangePwdResponse changePassword(AdminChangePwdRequest changePwd,Long adminId);

	AdminAddResp addAdmin(AdminAddReq admin);
	
	List<CourseDto> getAllCourse();
	List<ExamRespDto> getAllExam();
	List<SubjectDtoList> getAllSubject();
	
	
	
	
	
	public List<Syllabus> getSyllabus();
	List<ResponseTTDTO> getTimeTable();
	
}
