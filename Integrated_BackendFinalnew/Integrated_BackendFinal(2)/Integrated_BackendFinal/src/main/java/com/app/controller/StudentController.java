package com.app.controller;

import static org.springframework.http.MediaType.IMAGE_GIF_VALUE;
import static org.springframework.http.MediaType.IMAGE_JPEG_VALUE;
import static org.springframework.http.MediaType.IMAGE_PNG_VALUE;

import java.io.IOException;
import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.SyllabusDao;
import com.app.dto.AdminSignInRequest;
//import com.app.dto.ExamDTO;
//import com.app.dto.FeedbackDTO;
import com.app.dto.StudentAcademicDTO;
import com.app.dto.StudentAddDto;
import com.app.dto.StudentFeedbackAddDto;
import com.app.dto.StudentSignInRequest;
//import com.app.dto.StudentAttendanceDTO;
//import com.app.dto.StudentDTO;
import com.app.dto.StudentdetailsDTO;
import com.app.entities.Syllabus;
import com.app.service.ImageHandlingService;
import com.app.service.StudentAcademicService;
import com.app.service.StudentDetailsService;
import com.app.service.StudentService;
import com.app.service.SyllabusService;
import com.app.service.TimeTableService;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	private StudentService studentservice;
	
	@Autowired
	private ImageHandlingService imgService;
	
	@Autowired
	private StudentDetailsService studService;
	
	@Autowired
	private StudentAcademicService studacadService;
	
	@Autowired
	private SyllabusService sylService;
	
	@Autowired
	private StudentDetailsService studDetService;
	
	@Autowired
	private StudentAcademicService studAcaService;
	
	@Autowired
	private TimeTableService ttService;
	
//	@GetMapping("/attendance/{studentId}")
//	public ResponseEntity<?> getAttendance(@PathVariable Long studentId){
//		List<StudentAttendanceDTO> list = studentservice.getAllAttendance(studentId);
//		if (list.isEmpty())
//			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//		// exams found
//		return ResponseEntity.ok(list);
//	}
	
//	@GetMapping("/examdetails/{studentId}")
//	public ResponseEntity<?> getExamDetails(@PathVariable Long studentId){
//		List<ExamDTO> list = studentservice.getExamDetails(studentId);
//		if (list.isEmpty())
//			return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
//		// exams found
//		return ResponseEntity.ok(list);
//	}	
	
//	@PostMapping("/{facultyId}/{studentId}")
//	public ResponseEntity<?> addFeedback(@PathVariable Long facultyId,Long studentId
//			,@RequestBody FeedbackDTO feedback){
//	    
//		return ResponseEntity.status(HttpStatus.CREATED).
//				body(studentservice.updateFeedback(facultyId,studentId,feedback));
//	}
	
	@PutMapping("/{studId}")
	public ResponseEntity<?> updateStudentDetails(@PathVariable Long studId,@RequestBody StudentAddDto stud){
		
		return ResponseEntity.status(HttpStatus.CREATED).
				body(studentservice.UpdateStudentDetails(studId,stud));
	}
	
	@PostMapping(value = "/images/{studId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long studId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + studId);
		return ResponseEntity.status(HttpStatus.CREATED).body(imgService.uploadImage(studId, imageFile));
	}
	
	@GetMapping(value="/images/{studId}",produces = {IMAGE_GIF_VALUE,
			IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> serveEmpImage(@PathVariable Long studId) throws IOException {
		System.out.println("in download img " + studId);
		return ResponseEntity.ok(imgService.downloadImage(studId));
	}

      @PostMapping("/details/{studId}")
      public ResponseEntity<?> addNewStudentdetails( @PathVariable Long studId,@RequestBody StudentdetailsDTO student){
    	  return ResponseEntity.status(HttpStatus.CREATED).body(studService.addStudDetails(studId,student));
    	  
      }
      
      @PostMapping("/academicsdetails/{studId}")
      public ResponseEntity<?> addStudentAcademics(@PathVariable Long studId,@RequestBody StudentAcademicDTO student)
      {
    	  return ResponseEntity.status(HttpStatus.CREATED).body(studacadService.addStudentAcademics(studId, student));
      }
      
      @GetMapping("/syllabus")
      public ResponseEntity<?> getSyllabus(){
    	  return ResponseEntity.ok(sylService.getSyllabus());
      }
      
      @GetMapping("/details/{studId}")
      public ResponseEntity<?> getStudentDetails(@PathVariable Long studId){
    	  return ResponseEntity.ok(studDetService.getStudDetails(studId));
      }
      
      @GetMapping("/academicdetails/{studId}")
      public ResponseEntity<?> getStudentAcademicDetails(@PathVariable Long studId){
    	  return ResponseEntity.ok(studAcaService.getStudentAcademics(studId));
      }
      
      @PutMapping("/details/{studId}")
      public ResponseEntity<?> updateStudDetails(@PathVariable Long studId,@RequestBody StudentdetailsDTO student){
    	  return ResponseEntity.ok(studDetService.updateStudDetails(studId, student));
      }
      
      @PutMapping("/studAcaDetails/{studId}")
      public ResponseEntity<?> updateStudAcaDetails(@PathVariable Long studId,@RequestBody StudentAcademicDTO student){
    	  return ResponseEntity.ok(studacadService.updateStudAcaDetails(studId, student));
      }

      @GetMapping("/timetable")
      public ResponseEntity<?> getTimetable(){
    	  return ResponseEntity.ok(ttService.getTimeTable());
      }
      
      @GetMapping("/viewassignment/{sid}")
  	public ResponseEntity<?> viewAllAssignment(@PathVariable @Min(1) @Max(100) Long sid)
  	{
  		return ResponseEntity.ok(studentservice.viewAssignments(sid));
  	}
      
      @GetMapping("/getfeedback/{sid}/{fid}")
  	public ResponseEntity<?> viewFeedbackOfStudentForFaculty(@PathVariable @Min(1) @Max(100) Long sid,@PathVariable @Min(1) @Max(50) Long fid)
  	{
  		return ResponseEntity.ok(studentservice.getFeedbackOfStudentForFaculty(sid, fid));
  	}
      
      @PostMapping("/givefeedback")
      public ResponseEntity<?> giveFeedbackToFaculty(@RequestBody @Valid StudentFeedbackAddDto s)
      {
    	  return ResponseEntity.ok(studentservice.giveFeedbackToFaculty(s));  
      }
      
      @PostMapping("/signin")
  	public ResponseEntity<?> authenticateAdmin(@RequestBody @Valid StudentSignInRequest signInStudent){
  		
  		return new ResponseEntity<>(studentservice.signInStudent(signInStudent),HttpStatus.OK);
  	}
      
      
    //new 
      @GetMapping("/getAllScheduledFeedbacks/{sid}")
    	public ResponseEntity<?> getAllScheduledFeedbacks(@PathVariable @Min(1) @Max(100) Long sid)
    	{
    		return ResponseEntity.ok(studentservice.getAllScheduledAssignmentForStudent(sid));
    	}
      
}
