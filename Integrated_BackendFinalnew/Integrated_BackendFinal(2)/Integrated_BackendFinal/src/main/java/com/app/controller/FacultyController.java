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

import com.app.dao.FacultyAcademicDao;
import com.app.dao.FacultyDao;
import com.app.dao.FacultyDetailsDao;
import com.app.dto.AdminSignInRequest;
import com.app.dto.FacultyAcademicDTO;
import com.app.dto.FacultyDetailsDTO;
import com.app.dto.FacultySignInRequest;
import com.app.dto.ReqStudentAttendanceDTO;
import com.app.dto.ScheduleAssignmentDto;
import com.app.dto.StudentAcademicDTO;
import com.app.dto.StudentdetailsDTO;
import com.app.dto.SubjectDtoList;
import com.app.service.FacultyAcademicService;
import com.app.service.FacultyDetailsService;
import com.app.service.FacultyService;
import com.app.service.ImageHandlingService;
import com.app.service.SyllabusService;
import com.app.service.facImageHandlingService;


@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/faculty")
public class FacultyController {

	@Autowired
	private facImageHandlingService imgService;
	
	@Autowired
	private FacultyService facService;
	
	@Autowired
	private FacultyDetailsService facDetService;
	
	@Autowired
	private FacultyAcademicService facAcaService;
	
	@Autowired
	private SyllabusService sylService;
	
	@PostMapping(value = "/images/{facultyId}", consumes = "multipart/form-data")
	public ResponseEntity<?> uploadImage(@PathVariable Long facultyId, @RequestParam MultipartFile imageFile)
			throws IOException {
		System.out.println("in upload img " + facultyId);
		return ResponseEntity.status(HttpStatus.CREATED).body(imgService.facUploadImage(facultyId, imageFile));
	}
	
	@GetMapping(value="/images/{facultyId}",produces = {IMAGE_GIF_VALUE,
			IMAGE_JPEG_VALUE,IMAGE_PNG_VALUE})
	public ResponseEntity<?> serveEmpImage(@PathVariable Long facultyId) throws IOException {
		System.out.println("in download img " + facultyId);
		return ResponseEntity.ok(imgService.facDownloadImage(facultyId));
	}
	
	@GetMapping("/details/{facultyId}")
    public ResponseEntity<?> getFacultyDetails(@PathVariable Long facultyId){
  	  return ResponseEntity.ok(facDetService.getFacDetails(facultyId));
    }
	
	@PutMapping("/details/{facultyId}")
    public ResponseEntity<?> updateFacDetails(@PathVariable Long facultyId,@RequestBody FacultyDetailsDTO faculty){
  	  return ResponseEntity.ok(facDetService.updateFacDetails(facultyId, faculty));
    }
	
	@PostMapping("/details/{facultyId}")
    public ResponseEntity<?> addNewFacultydetails( @PathVariable Long facultyId,@RequestBody FacultyDetailsDTO faculty){
  	  return ResponseEntity.status(HttpStatus.CREATED).body(facDetService.addFacDetails(facultyId,faculty));
  	  
    }
	
	@GetMapping("/{facultyId}")
	public ResponseEntity<?> getFaculty(@PathVariable Long facultyId){
		return ResponseEntity.ok(facService.getFaculty(facultyId));
	}
	
	@PostMapping("attendance/{facultyId}")
	public ResponseEntity<?> addStudAttendance(@PathVariable Long facultyId,@RequestBody ReqStudentAttendanceDTO studentatt){
		return ResponseEntity.status(HttpStatus.CREATED).body(facService.addStudAttByFaculty(facultyId, studentatt));
	}
	
	@GetMapping("timetable/{facultyId}")
	public ResponseEntity<?> getTimetable(@PathVariable Long facultyId)
	{
		return ResponseEntity.ok(facService.getTimetable(facultyId));
	}
	
	 @PostMapping("/facacademicsdetails/{facultyId}")
     public ResponseEntity<?> addStudentAcademics(@PathVariable Long facultyId,@RequestBody FacultyAcademicDTO faculty)
     {
   	  return ResponseEntity.status(HttpStatus.CREATED).body(facAcaService.addFacAcademics(facultyId, faculty));
     }
     
	 @GetMapping("/facacademicdetails/{facultyId}")
     public ResponseEntity<?> getStudentAcademicDetails(@PathVariable Long facultyId){
   	  return ResponseEntity.ok(facAcaService.getFacultyAcademics(facultyId));
     }
     
	  @PutMapping("/facAcaDetails/{facultyId}")
      public ResponseEntity<?> updateStudAcaDetails(@PathVariable Long facultyId,@RequestBody FacultyAcademicDTO faculty){
    	  return ResponseEntity.ok(facAcaService.updateFacAcaDetails(facultyId, faculty));
      }
    
	  @GetMapping("/syllabus")
      public ResponseEntity<?> getSyllabus(){
    	  return ResponseEntity.ok(sylService.getSyllabus());
      }
	  
	  
	  @PostMapping("/signin")
		public ResponseEntity<?> authenticateAdmin(@RequestBody @Valid FacultySignInRequest signInFaculty){
			
			return new ResponseEntity<>(facService.signInFaculty(signInFaculty),HttpStatus.OK);
		}
	  
	  
	  //Assignment
	  @PostMapping("/scheduleassignment")
		public ResponseEntity<?> scheduleAssignmetForSubject(@RequestBody @Valid ScheduleAssignmentDto s) //remaining
		{
		  System.out.println("in schedule assignment" );
			return ResponseEntity.status(HttpStatus.CREATED).body(facService.scheduleAssignment(s));
		}
	  
	  //getAll assignment
	  //delete assignment

		@GetMapping("/allScheduledAssignments") //new
		public ResponseEntity<?> getAllScheduledAssignments()
		{
			return ResponseEntity.ok(facService.getAllScheduledAssignments());
		}
		
		
		@GetMapping("/delete/scheduledAssignment/{said}")
		public ResponseEntity<?> deleteScheduledAssignments(@PathVariable @Min(1) @Max(10) Long said)
		{
			return ResponseEntity.ok(facService.deleteScheduledAssignmentDetails(said));
		}
	  
		@GetMapping("/allstudentAssignments") //new
		public ResponseEntity<?> getAllStudentAssignment()
		{
			return ResponseEntity.ok(facService.getAllStudentAssignment());
		}
	  
		
		@GetMapping("/changestatus/{sid}/{said}")
		public ResponseEntity<?> changeAssignmentStatus(@PathVariable @Min(1) @Max(100) Long sid,@PathVariable @Min(1) @Max(50) Long said) //remaining
		{
			return ResponseEntity.ok(facService.changeStatusOfAssignment(sid, said));
		}
		
		@GetMapping("/allstudentfeedbacks/{fid}") //new
		public ResponseEntity<?> getAllStudentFeedback(@PathVariable @Min(1) @Max(100) Long fid)
		{
			return ResponseEntity.ok(facService.getAllStudentFeedbackForFaculty(fid));
		}
		
		@GetMapping("/subject")
		public List<SubjectDtoList> getAllSubject(){
			
			return facService.getAllSubject();
		}
		
	  
}
