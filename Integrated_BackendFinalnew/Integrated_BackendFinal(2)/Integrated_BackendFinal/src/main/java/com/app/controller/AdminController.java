package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminChangePwdRequest;
import com.app.dto.AdminSignInRequest;
import com.app.dto.CourseDto;
import com.app.dto.ExamAddDto;
import com.app.dto.ExamRespDto;
import com.app.dto.FacultyAddDto;
import com.app.dto.FeedbackAddQuestion;
import com.app.dto.FeedbackCategoryDto;
import com.app.dto.ScheduleAssignmentDto;
import com.app.dto.SetFeedbackDto;
import com.app.dto.StudentAddDto;
import com.app.dto.SubjectDto;
import com.app.dto.SubjectDtoList;
import com.app.dto.SyllabusDTO;
import com.app.dto.TimeTableDTO;
import com.app.entities.Course;
import com.app.entities.Faculty;
import com.app.entities.Student;
import com.app.entities.Subject;
import com.app.entities.TimeTable;
import com.app.service.AdminService;
import com.app.service.SyllabusService;
import com.app.service.TimeTableService;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/admin")
@Validated
public class AdminController {

	@Autowired
	private AdminService adminservice;
	
	@Autowired
	private SyllabusService sylService;
	
	@Autowired
	private TimeTableService ttService;
	
	
	
	@PostMapping("/course")
	public ResponseEntity<?> saveCourseDetails(@RequestBody @Valid CourseDto c)
	{
		System.out.println("in save course " + c);
		
		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.addCourseDetails(c));
	}
	
	@PostMapping("/subject")
	public ResponseEntity<?>  saveSubjectDetails(@RequestBody @Valid SubjectDto s)
	{
		System.out.println("in save subject " + s);
		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.addSubjectDetails(s));

	}
	
	@PostMapping("/student")
	public ResponseEntity<?> saveStudentDetails(@RequestBody @Valid StudentAddDto st)
	{
		System.out.println("in save student " + st);
		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.addStudentDetails(st));
		
	}
	
	//************************new (Anagha)*****************************
	
	
	
	@GetMapping("/delete/{sid}")
	public ResponseEntity<?> deleteStudent(@PathVariable @Min(1) @Max(50) Long sid) 
	{
		System.out.println("in delete student" + sid);
		return ResponseEntity.ok(adminservice.deleteStudentDetails(sid));
	}
	
	@GetMapping("/allstudents") //new
	public ResponseEntity<?> getAllstudents()
	{
		return ResponseEntity.ok(adminservice.getAllStudent());
	}
	
	
	@PostMapping("/faculty")
	public ResponseEntity<?> saveFacultyDetails(@RequestBody @Valid FacultyAddDto f)
	{
		System.out.println("in save faculty " + f);
		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.addFacultyDetails(f));
		
	}
	
	@GetMapping("/allfaculty") //new
	public ResponseEntity<?> getAllFaculty()
	{
		return ResponseEntity.ok(adminservice.getAllFaculty());
	}
	
	
	//********new(Anagha)********************************
	@GetMapping("/delete/faculty/{fid}")
	public ResponseEntity<?> deleteFaculty(@PathVariable @Min(1) @Max(50) Long fid) 
	{
		System.out.println("in delete faculty" + fid);
		return ResponseEntity.ok(adminservice.deleteFacultyDetails(fid));
	}
	
	
	
	
	@PostMapping("/exam/add")
	public ResponseEntity<?> saveExamDetails(@RequestBody @Valid ExamAddDto e) //remaining
	{
		System.out.println("in save faculty " + e);
		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.addExamDetails(e));
	}
	
	@GetMapping("/delete/{eid}/exam")
	public  ResponseEntity<?> deleteExam(@PathVariable @Min(1) @Max(50) Long eid) //remaining
	{
		System.out.println("in delete exam" + eid);
		return ResponseEntity.ok(adminservice.deleteExamDetails(eid));
	}
	
	//FEEDBACK API
	
	//faculty getFeedback remaining - same as AllStudentFeedbackForFaculty
	
	@PostMapping("/feedbackcategory")
	public ResponseEntity<?> saveFeedbackCategoryDetails(@RequestBody @Valid FeedbackCategoryDto f)
	{
		System.out.println("in save feedback category " + f);
		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.addFeedbackCategory(f));
	}
	
	
	//new*************************************************
		@GetMapping("/allcategories")
		public ResponseEntity<?> getAllCategories()
		{
			return ResponseEntity.ok(adminservice.getAllCategories());
		}
	
	@GetMapping("/delete/category/{cid}")
	public ResponseEntity<?> deleteCategory(@PathVariable @Min(1) @Max(10) Long cid)
	{
		return ResponseEntity.ok(adminservice.removeFeedbackCategory(cid));
	}
	
	
	@PostMapping("/feedbackquestion")
	public ResponseEntity<?> saveFeedbackQuestionDetails(@RequestBody @Valid FeedbackAddQuestion q)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.addFeedbackQuestion(q));
	}
	
	@GetMapping("/allquestions") //new
	public ResponseEntity<?> getAllQuestion()
	{
		return ResponseEntity.ok(adminservice.getAllQuestions());
	}
	
	
	@GetMapping("/delete/question/{qid}")
	public ResponseEntity<?> deleteQuestion(@PathVariable @Min(1) @Max(10) Long qid)
	{
		return ResponseEntity.ok(adminservice.removeFeedbackQuestion(qid));
	}
	
	
	@PostMapping("/update/question/{qid}")
	public ResponseEntity<?> updateQuestion(@PathVariable @Min(1) @Max(10) Long qid,@RequestBody @Valid FeedbackAddQuestion q)
	{
		return ResponseEntity.ok(adminservice.updateFeedbackQuestion(qid, q));
	}
	
	
	@PostMapping("/setfeedback")
	public ResponseEntity<?> setFeedback(@RequestBody @Valid SetFeedbackDto f)
	{
		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.scheduleFeedback(f));
	}
	
	@GetMapping("/studentfeedback/{fid}")
	public ResponseEntity<?> AllStudentFeedbackForFaculty(@PathVariable @Min(1) @Max(50) Long fid) //remaining
	{
		return ResponseEntity.ok(adminservice.getFeedbacksByFacultyId(fid));
	}
	
	
	//////////////////////STUDENT AIP ///////////////////////////////////////////////
	
//	@GetMapping("/getfeedback/{sid}/{fid}")
//	public ResponseEntity<?> viewFeedbackOfStudentForFaculty(@PathVariable @Min(1) @Max(100) Long sid,@PathVariable @Min(1) @Max(50) Long fid)
//	{
//		return ResponseEntity.ok(adminservice.getFeedbackOfStudentForFaculty(sid, fid));
//	}
	
	
	/***************************Assignment Api**************************/
	
	
	//faculty
//	@PostMapping("/scheduleassignment")
//	public ResponseEntity<?> scheduleAssignmetForSubject(@RequestBody @Valid ScheduleAssignmentDto s) //remaining
//	{
//		return ResponseEntity.status(HttpStatus.CREATED).body(adminservice.scheduleAssignment(s));
//	}
//	
//	@GetMapping("/changestatus/{sid}/{said}")
//	public ResponseEntity<?> changeAssignmentStatus(@PathVariable @Min(1) @Max(100) Long sid,@PathVariable @Min(1) @Max(50) Long said) //remaining
//	{
//		return ResponseEntity.ok(adminservice.changeStatusOfAssignment(sid, said));
//	}
//	
	
	//student
//	@GetMapping("/viewassignment/{sid}")
//	public ResponseEntity<?> viewAllAssignment(@PathVariable @Min(1) @Max(100) Long sid)
//	{
//		return ResponseEntity.ok(adminservice.viewAssignments(sid));
//	}
	
	
	//Dhanashree : timetable and syllabus
	
	
	@PostMapping("/syllabus")
	public ResponseEntity<?> addSyllabus(@RequestBody SyllabusDTO syllabus){
		return ResponseEntity.status(HttpStatus.CREATED).body(sylService.addSyllabus(syllabus));
	}
	
	
	 @GetMapping("/getsyllabus")
     public ResponseEntity<?> getSyllabus(){
   	  return ResponseEntity.ok(sylService.getSyllabus());
     }
	
	@PostMapping("/timetable")
	public ResponseEntity<?> addTimeTable(@RequestBody TimeTableDTO timetable){
		return ResponseEntity.status(HttpStatus.CREATED).body(ttService.addTimeTable(timetable));
	}
	

    @GetMapping("/gettimetable")
    public ResponseEntity<?> getTimetable(){
  	  return ResponseEntity.ok(ttService.getTimeTable());
    }
	
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateAdmin(@RequestBody @Valid AdminSignInRequest signInAdmin){
		System.out.println("In admin signin");
		return new ResponseEntity<>(adminservice.signInAdmin(signInAdmin),HttpStatus.OK);
	}
	
	@PutMapping("/changepwd")
	public ResponseEntity<?> updatePwd(@RequestBody @Valid AdminChangePwdRequest changePwd,Long adminId){
		
			return new ResponseEntity<>(adminservice.changePassword(changePwd, adminId),HttpStatus.OK);
		
	}
	@GetMapping("/exam")
	public List<ExamRespDto> getAllExam(){
		
		return adminservice.getAllExam();
	}
	
	@GetMapping("/subject")
	public List<SubjectDtoList> getAllSubject(){
		
		return adminservice.getAllSubject();
	}
	
	@GetMapping("/courses")
	public ResponseEntity<?> getAllCourses(){
		return ResponseEntity.ok(adminservice.getAllCourse());
	}
	
}
