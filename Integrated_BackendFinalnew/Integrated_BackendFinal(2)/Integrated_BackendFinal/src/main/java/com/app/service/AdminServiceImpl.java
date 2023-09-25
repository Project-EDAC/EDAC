package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ApiException;
import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminDao;
import com.app.dao.AssignmentDao;
import com.app.dao.CourseDao;
import com.app.dao.EventDao;
import com.app.dao.ExamDao;
import com.app.dao.FacultyDao;
import com.app.dao.FeedbackCategoryDao;
import com.app.dao.ScheduledFeedbackDao;
import com.app.dao.FeedbackQuestionDao;
import com.app.dao.ScheduledAssignmentDao;
import com.app.dao.StudentDao;
import com.app.dao.StudentFeedbackDao;
import com.app.dao.SubjectDao;
import com.app.dao.SyllabusDao;
import com.app.dao.TimeTableDao;
import com.app.dao.UserDao;
import com.app.dto.AdminAddReq;
import com.app.dto.AdminAddResp;
import com.app.dto.AdminChangePwdRequest;
import com.app.dto.AdminChangePwdResponse;
import com.app.dto.AdminSignInRequest;
import com.app.dto.AdminSignInResponse;
//import com.app.dao.TimetableDao;
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
import com.app.entities.Admin;
import com.app.entities.Assignment;
import com.app.entities.Course;
import com.app.entities.Event;
import com.app.entities.Exam;
import com.app.entities.Faculty;
import com.app.entities.ScheduledFeedback;
import com.app.entities.FeedbackCategory;
import com.app.entities.FeedbackQuestion;
import com.app.entities.ScheduleAssignment;
import com.app.entities.Student;
import com.app.entities.StudentAttendance;
import com.app.entities.StudentFeedback;
import com.app.entities.Subject;
import com.app.entities.Syllabus;
import com.app.entities.TimeTable;
import com.app.entities.User;
import com.app.entities.UserRole;


@Service
@Transactional
public class AdminServiceImpl implements AdminService {

	@Autowired
	private TimeTableDao ttDao;
	
	@Autowired
	private AdminDao admindao;
	
	@Autowired
	private CourseDao coursedao;
	
	@Autowired
	private SubjectDao subjectdao;
	
	@Autowired
	private StudentDao studentdao;
	
	
	@Autowired
	private FacultyDao facultydao;
	
	@Autowired
	private ExamDao examdao;
	
	@Autowired
	private EventDao eventdao;
	
//	@Autowired
//	private TimetableDao tdao;
	
	@Autowired
	private FeedbackCategoryDao fcdao;
	
	@Autowired
	private FeedbackQuestionDao feedbackquestiondao;
	
	@Autowired
	private ScheduledFeedbackDao scheduledfeedbackdao;
	
	@Autowired
	private StudentFeedbackDao studentfeedbackdao;
	
	@Autowired
	private AssignmentDao assignmentdao;
	
	@Autowired
	private ScheduledAssignmentDao scheduledassignmentdao;
	
	@Autowired
	private ModelMapper mapper;
	
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private SyllabusDao sylDao;

	
	@Autowired
	private PasswordEncoder encoder;
	
	@Override
	public CourseDto addCourseDetails(CourseDto c) {
		
//		Department departmentEntity = mapper.map(dept, Department.class);
//		Department persistentDept = departmentDao.save(departmentEntity);
//		return mapper.map(persistentDept, DepartmentDTO.class);
		
		Course courseEntity = mapper.map(c, Course.class);
		Course coursePersistent = coursedao.save(courseEntity);
		return mapper.map(coursePersistent,CourseDto.class);
	}
	
	@Override
	public SubjectDto addSubjectDetails(SubjectDto s) {
		

		Course c = coursedao.findById(s.getCourseid()).orElseThrow(() -> new ResourceNotFoundException("Invalid course id !!!"));
		Subject subjectEntity = mapper.map(s,Subject.class);
		c.addSubject(subjectEntity);
		Subject subjectPersistent = subjectdao.save(subjectEntity);
		return  mapper.map(subjectPersistent, SubjectDto.class);
	}
	
	@Override
	public ApiResponse removeSubjectDetails(Long subid) {
		
		Subject s = subjectdao.findById(subid).orElseThrow(() -> new ResourceNotFoundException("Invalid subject id !!!"));
		subjectdao.delete(s);
		return new ApiResponse("Subject deleted succesfully");
	}
	
	
//	@Override
//	public StudentRespDto addStudentDetails(StudentAddDto st) {
//		
//		
//		if(st.getConfirmPassword().equals(st.getPassword()))
//		{
//			Course c = coursedao.findById(st.getCourseid()).orElseThrow(() -> new ResourceNotFoundException("Invalid course id !!!"));
//			Student studentEntity = mapper.map(st, Student.class);
//			c.addStudent(studentEntity);
//			Student student =  studentdao.save(studentEntity);
//			return mapper.map(student, StudentRespDto.class);	
//		}
//		 else
//				throw new ApiException("Passwords don't match!!!!!");
//	}
	
	
	//*****************new (Anagha)****************************************
	@Override
	public List<StudentRespDto> getAllStudent() {
		
		List<Student> students= studentdao.findAll();
		
//		return categories.stream()
//				.map(category -> mapper.map(category, FeedbackCategoryRespDto.class))
//				.collect(Collectors.toList());
		
		return students.stream()
				.map(student-> mapper.map(student, StudentRespDto.class))
				.collect(Collectors.toList());
	}
		
	@Override
	public AdminSignInResponse signInAdmin(AdminSignInRequest signRequest) {
		
		System.out.println(signRequest.getEmail()+"  "+signRequest.getPassword());
		Admin admin = admindao.findByEmailAndPassword(signRequest.getEmail(),signRequest.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Email or Password!!!!"));
		
		
		return mapper.map(admin,AdminSignInResponse.class);
	}

	@Override
	public AdminChangePwdResponse changePassword(AdminChangePwdRequest changePwd,Long adminId) {
		
		Admin admin = admindao.findById(adminId).orElseThrow(() -> new ResourceNotFoundException("Emp id invalid !!!!!"));
		
		admin.setPassword(changePwd.getPassword());

		
		return mapper.map(admindao.save(admin), AdminChangePwdResponse.class);
	}
	
	
	
//	@Override
//	public FacultyRespDto addFacultyDetails(FacultyAddDto f) {
//		
//		if(f.getConfirmPassword().equals(f.getPassword()))
//		{
//			Subject s = subjectdao.findById(f.getSubjectid()).orElseThrow(() -> new ResourceNotFoundException("Invalid course id !!!"));
//			Faculty facultyEntity = mapper.map(f,Faculty.class);
//			facultyEntity.addSubject(s);
//			Faculty facultyPersistent = facultydao.save(facultyEntity);
//			return mapper.map(facultyPersistent,FacultyRespDto.class);
//		} else
//			throw new ApiException("Passwords don't match!!!!!");
//		
//	}
	
	
	@Override
	public List<FacultyRespDto> getAllFaculty() {
		
		List<Faculty> faculties= facultydao.findAll();
		
//		return categories.stream()
//				.map(category -> mapper.map(category, FeedbackCategoryRespDto.class))
//				.collect(Collectors.toList());
		
		return faculties.stream()
				.map(faculty-> mapper.map(faculty, FacultyRespDto.class))
				.collect(Collectors.toList());
	}
	
	
	//****************new (Anagha)************************
	@Override
	public String deleteFacultyDetails(Long fid) {
		//Student st = studentdao.findById(sid).orElseThrow(() -> new ResourceNotFoundException("Invalid Student id !!!"));
				
		Faculty f = facultydao.findById(fid).
				orElseThrow(() -> new ResourceNotFoundException("Invalid Faculty id !!!"));
				
		facultydao.delete(f);
				
				return "Faculty details deleted .......";
				
	}
	
	@Override
	public Event addEvent(Event e)
	{
		return eventdao.save(e);
	}
	
	@Override
	public ExamRespDto addExamDetails(ExamAddDto e) {
		
		Subject s = subjectdao.findById(e.getSubjectid()).orElseThrow(() -> new ResourceNotFoundException("Invalid course id !!!"));
		Exam examEntity = mapper.map(e, Exam.class);
		s.addExam(examEntity);
		Exam examPersistent = examdao.save(examEntity);
		
		Event event = new Event();
		String desc = "Exam , Subject : "+ examPersistent.getSubject().getName()+" ExamDate : "+ examPersistent.getExamDate();
		event.setEventDescription(desc);
		event.setDate(LocalDate.now());
		
		System.out.println(addEvent(event));
		
		return mapper.map(examPersistent,ExamRespDto.class);
	}

	

	
	@Override
	public String deleteStudentDetails(Long sid) {
		Student st = studentdao.findById(sid).orElseThrow(() -> new ResourceNotFoundException("Invalid Student id !!!"));
		
//		Iterator<ScheduledFeedback> feedbackItr = st.getFeedbacks().iterator();
//		while(feedbackItr.hasNext())
//			feedbackItr.next().getStudent().remove(st);
		
//		Iterator<Exam> examItr = st.getExams().iterator();
//		while(examItr.hasNext())
//			examItr.next().getStudent().remove(st);
		
//		Iterator<Assignment> assignmentItr = st.getAssignment().iterator();
//		while(assignmentItr.hasNext())
//			assignmentItr.next().getStudent().remove(st);
//		
//		Iterator<StudentAttendance> attendanceItr = st.getAttendance().iterator();
//		while(attendanceItr.hasNext())
//			attendanceItr.next().getStudent().remove(st);
		
		studentdao.delete(st);
		
		return "Student details deleted .......";
	}
	
	@Override
	public String deleteExamDetails(Long eid) {
		Exam e = examdao.findById(eid).orElseThrow(() -> new ResourceNotFoundException("Invalid Exam id !!!"));
//		Iterator<Student> studentItr = e.getStudent().iterator();
//		while(studentItr.hasNext())
//			studentItr.next().getExams().remove(e);
		
		examdao.delete(e);
		return "exam deleted ........";
	}
	
	
//	@Override
//	public TimeTable addTimetable(TimeTable t) {
//		
//		return tdao.save(t);
//	}
	
	
	
	
	
	
	//FEEDBACK API
	
	@Override
	public FeedbackCategoryDto addFeedbackCategory(FeedbackCategoryDto f) {
		
		FeedbackCategory c = mapper.map(f,FeedbackCategory.class);
		FeedbackCategory persistentc =  fcdao.save(c);
		return mapper.map(persistentc, FeedbackCategoryDto.class);
	}
	
	
	//NEW - Please Add
		@Override
		public List<FeedbackCategoryRespDto> getAllCategories() {
			
			List<FeedbackCategory> categories= fcdao.findAll();
			
			return categories.stream()
					.map(category -> mapper.map(category, FeedbackCategoryRespDto.class))
					.collect(Collectors.toList());
		}
	
	
	@Override
	public ApiResponse removeFeedbackCategory(Long fcid) {
		FeedbackCategory c = fcdao.findById(fcid).orElseThrow(() -> new ResourceNotFoundException("Invalid category id !!!"));
		fcdao.delete(c);
		return new ApiResponse("Category deleted.......");
	}
	
	
	//add question
	
	@Override
	public FeedbackRespQuestion addFeedbackQuestion(FeedbackAddQuestion q) {
		
		FeedbackCategory category = fcdao.findById(q.getCategoryid()).orElseThrow(() -> new ResourceNotFoundException("Invalid category id !!!"));
		
		FeedbackQuestion question = mapper.map(q,FeedbackQuestion.class);
		category.addQuestion(question);
		
		FeedbackQuestion persistentQuestion = feedbackquestiondao.save(question);
		return mapper.map(persistentQuestion,FeedbackRespQuestion.class);
	}
	
	@Override
	public ApiResponse removeFeedbackQuestion(Long qid) {
		FeedbackQuestion q = feedbackquestiondao.findById(qid).orElseThrow(() -> new ResourceNotFoundException("Invalid question id !!!"));
		feedbackquestiondao.delete(q);
		return new ApiResponse("Question deleted.......");
	}
	
	
	// NEW - Please note
		@Override
		public List<FeedbackRespQuestion> getAllQuestions() {
			
			List<FeedbackQuestion> questions = feedbackquestiondao.findAll();
			
			return questions.stream()
					.map(question -> mapper.map(question, FeedbackRespQuestion.class))
					.collect(Collectors.toList());
		}
	
	@Override
	public FeedbackRespQuestion updateFeedbackQuestion(Long qid, FeedbackAddQuestion q) {

		
		FeedbackQuestion question = feedbackquestiondao.findById(qid)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid question id !!!"));
		
		FeedbackCategory category = fcdao.findById(q.getCategoryid())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid category id !!!"));
	
		mapper.map(q, question);
		question.setId(qid);
		
		category.addQuestion(question);
		return mapper.map(question, FeedbackRespQuestion.class);
	}
	
	
	@Override
	public SetFeedbackRespDto scheduleFeedback(SetFeedbackDto f) {
		
		Faculty faculty = facultydao.findById(f.getFacultyId()).
				orElseThrow(() -> new ResourceNotFoundException("Invalid faculty id !!!"));
		
		//ScheduledFeedback feedback = mapper.map(f, ScheduledFeedback.class);
		
		ScheduledFeedback feedback = new ScheduledFeedback();
		feedback.setFaculty(faculty);
		List<FeedbackCategory> categories = fcdao.findAll();
		
		for (FeedbackCategory feedbackCategory : categories) {
			feedbackCategory.addFeedback(feedback);
		}
		
		feedback.setCategories(categories);
		
		
		ScheduledFeedback persistentFeedback = scheduledfeedbackdao.save(feedback);
		return mapper.map(persistentFeedback, SetFeedbackRespDto.class);
	}
	
	@Override
	public List<StudentFeedbackRespDto> getFeedbacksByFacultyId(Long fid) {
		
		ScheduledFeedback scheduledFeedback = scheduledfeedbackdao.findByFacultyId(fid);
		
		List<StudentFeedback> studentFeedbacks = studentfeedbackdao.findByScheduledFeedbackId(scheduledFeedback.getId());
		
		
//		return empList.stream() //Stream<Emp>
//				.map(emp -> mapper.map(emp, EmployeeRespDTO.class)) //Stream<DTO>
//				.collect(Collectors.toList());
		
		return studentFeedbacks.stream()
				.map(feedback -> mapper.map(feedback, StudentFeedbackRespDto.class))
				.collect(Collectors.toList());
		
		//return (List<StudentFeedbackRespDto>) mapper.map(studentFeedbacks, StudentFeedbackRespDto.class);
	}
	
	
	
	
	///////////////////////////////////////////////FOR STUDENT API/////////////////////
	
	//give feedback - testing remaining
//	@Override
//	public StudentFeedbackRespDto giveFeedbackToFaculty(StudentFeedbackAddDto s) {
//		
//		Student st = studentdao.findById(s.getStudentId()).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid student id !!!"));
//		 
//		StudentFeedback stFeedback = mapper.map(s, StudentFeedback.class);
//		
//		ScheduledFeedback scFeedback = scheduledfeedbackdao.findById(s.getScheduledFeedbackId()).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid scheduled feedback id !!!"));
//		
//		scFeedback.addStudentFeedbacks(stFeedback);
//		st.addStudentFeedback(stFeedback);
//		
//		StudentFeedback persistentStFeedback = studentfeedbackdao.save(stFeedback);
//		return mapper.map(persistentStFeedback, StudentFeedbackRespDto.class);
//	}
	
	
	
//	@Override
//	public StudentFeedbackRespDto getFeedbackOfStudentForFaculty(Long sid,Long fid)
//	{
//		Student st = studentdao.findById(sid).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid student id !!!"));
//		
////		Faculty f = facultydao.findById(fid).
////				orElseThrow(() -> new ResourceNotFoundException("Invalid faculty id !!!"));
//		
//		ScheduledFeedback scheduledFeedback = scheduledfeedbackdao.findByFacultyId(fid);
//		
//		StudentFeedback sf = studentfeedbackdao.findByStudentIdAndScheduledFeedbackId(sid, scheduledFeedback.getId());
//		
//		return mapper.map(sf, StudentFeedbackRespDto.class);
//	
//	}
	
	
	
	/*******************************Assignment********************************/
	//faculty - schedule assignment
	
//	public ScheduledAssignmentRespDto scheduleAssignment(ScheduleAssignmentDto s)
//	{
//		ScheduleAssignment scheduledAssignment = mapper.map(s, ScheduleAssignment.class);
//		
//		//System.out.println(scheduledAssignment);
//		Subject st = subjectdao.findById(s.getSubjectId()).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid subject id !!!"));
//		
//		//System.out.println(st);
//		
//		st.addAssignment(scheduledAssignment);
//		//scheduledAssignment.setSubject(st);
//		
////		Assignment assignment = new Assignment();
////		assignment.setScheduledAssignment(scheduledAssignment);
//		List<Student> students = studentdao.findAll();
//		
//		for (Student student : students) {
//			
//			Assignment assignment = new Assignment();
//			//assignment.setScheduledAssignment(scheduledAssignment);
//			student.addAssignment(assignment);
//			scheduledAssignment.addAssignment(assignment);
//			//Assignment persistentAssignment = assignmentdao.save(assignment);
//			assignmentdao.save(assignment);
//		}
//		
//		ScheduleAssignment persistentAssignment = scheduledassignmentdao.save(scheduledAssignment);
//		
//		return mapper.map(persistentAssignment, ScheduledAssignmentRespDto.class);
//	}
//	
//	@Override
//	public String changeStatusOfAssignment(Long studentid, Long scheduledassignmentid) {
//		
//		Assignment assignment = assignmentdao.findByStudentIdAndScheduledAssignmentId(studentid, scheduledassignmentid);
//		
//		if(assignment.isStatus())
//		{
//			assignment.setStatus(false);
//			return "changed to false";
//		}
//		else
//		{
//			assignment.setStatus(true);
//			return "changed to true";
//		}
//		
//		
//	}
//	
	/************************Student api - view assignments****************************/
	
//	@Override
//	public List<AssignmentDto> viewAssignments(Long sid) {
//		List<Assignment> assignments = assignmentdao.findByStudentId(sid);
//		
//		return assignments.stream()
//				.map(assignment -> mapper.map(assignment,AssignmentDto.class))
//				.collect(Collectors.toList());
//
//	}
	
	//------------------------------Security ADD-------------------------------------------
	@Override
	public AdminAddResp addAdmin(AdminAddReq admin) {
		
		User user = new User();
		user.setEmail(admin.getEmail());
		user.setPassword(encoder.encode(admin.getPassword()));
		user.setRole(admin.getRole());
		User user1 =userDao.save(user);
		
		Admin admin1  = mapper.map(admin, Admin.class);
		
		admin1.setUser(user1);
		System.out.println("user1 "+user1.toString());
		
		System.out.println("user1 "+admin1.toString());
		admindao.save(admin1);
		
		return mapper.map(admin1, AdminAddResp.class);
	}
//	
	@Override
	public StudentRespDto addStudentDetails(StudentAddDto st) {
		
		
		if(st.getConfirmPassword().equals(st.getPassword()))
		{
			User user = new User();
			user.setEmail(st.getEmail());
			user.setPassword(encoder.encode(st.getPassword()));
			user.setRole(UserRole.ROLE_STUDENT);
			User user1 = userDao.save(user);		
			
			Course c = coursedao.findById(st.getCourseid()).orElseThrow(() -> new ResourceNotFoundException("Invalid course id !!!"));
			Student studentEntity = mapper.map(st, Student.class);
			studentEntity.setUser(user1);
			c.addStudent(studentEntity);
			Student student =  studentdao.save(studentEntity);
			return mapper.map(student, StudentRespDto.class);	
		}
		 else
				throw new ApiException("Passwords don't match!!!!!");
	}
	
	
	@Override
	public FacultyRespDto addFacultyDetails(FacultyAddDto f) {
		
		if(f.getConfirmPassword().equals(f.getPassword()))
		{
			User user = new User();
			user.setEmail(f.getEmail());
			user.setPassword(encoder.encode(f.getPassword()));
			user.setRole(UserRole.ROLE_FACULTY);
			User user1 = userDao.save(user);
												
			Subject s = subjectdao.findById(f.getSubjectid()).orElseThrow(() -> new ResourceNotFoundException("Invalid course id !!!"));
			Faculty facultyEntity = mapper.map(f,Faculty.class);
			facultyEntity.setUser(user1);
			facultyEntity.addSubject(s);
			Faculty facultyPersistent = facultydao.save(facultyEntity);
			return mapper.map(facultyPersistent,FacultyRespDto.class);
		} else
			throw new ApiException("Passwords don't match!!!!!");
		
	}
	
	
	@Override
	public List<ExamRespDto> getAllExam() {
		List<Exam> exams = examdao.findAll();
		
		List<ExamRespDto> examsResp = exams.stream()
			    .map(e -> mapper.map(e, ExamRespDto.class))
			    .collect(Collectors.toList());
		return examsResp;
	}

	@Override
	public List<SubjectDtoList> getAllSubject() {
		List<Subject> subjects = subjectdao.findAll();
		
		List<SubjectDtoList> subjectDtos = subjects.stream()
												.map(e -> mapper.map(e, SubjectDtoList.class))
												.collect(Collectors.toList());
		return subjectDtos;
	}
	
	
	@Override
	public List<CourseDto> getAllCourse() {
		
		List<Course> courses = coursedao.findAll();
		
		return courses.stream()
				.map(course->mapper.map(course, CourseDto.class))
				.collect(Collectors.toList());
		
	}
	
	
	@Override
	public List<Syllabus> getSyllabus() {
		List<Syllabus> list = sylDao.findAll();
		return list ;
	}
	
	
	@Override
	public List<ResponseTTDTO> getTimeTable() {
		List<TimeTable> list = ttDao.findAll();
		return list.stream() //Stream<Emp>
				.map(emp -> mapper.map(emp, ResponseTTDTO.class)) //Stream<DTO>
				.collect(Collectors.toList());
	}

	
}
