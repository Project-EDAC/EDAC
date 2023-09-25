package com.app.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AssignmentDao;
import com.app.dao.ExamDao;
import com.app.dao.FacultyDao;
import com.app.dao.FeedbackAnswerDao;
import com.app.dao.FeedbackQuestionDao;
import com.app.dao.ScheduledFeedbackDao;
//import com.app.dao.FeedbackDao;
//import com.app.dao.StudentAttendanceDao;
import com.app.dao.StudentDao;
import com.app.dao.StudentFeedbackDao;
import com.app.dto.AssignmentDto;
import com.app.dto.FeedbackAnswerDto;
import com.app.dto.FeedbackAnswerForStudentDto;
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
import com.app.entities.Assignment;
import com.app.entities.FeedbackAnswer;
import com.app.entities.FeedbackQuestion;
import com.app.entities.ScheduledFeedback;
//import com.app.entities.Feedback;
import com.app.entities.Student;

import com.app.entities.StudentFeedback;

import io.swagger.v3.oas.annotations.servers.Server;

@Service
@Transactional
public class StudentServiceImpl implements StudentService {

//	@Autowired
//	private StudentAttendanceDao studAttendance;
	
//	@Autowired
//	private FeedbackDao feedbackdao;
//	
	@Autowired
	private ExamDao examdao;
	
	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private FacultyDao facultydao;
	
	@Autowired
	private ScheduledFeedbackDao scheduledfeedbackdao;
	
	@Autowired
	private StudentFeedbackDao studentfeedbackdao;
	
	@Autowired
	private AssignmentDao assignmentdao;
	
	@Autowired
	private FeedbackQuestionDao questiondao;
	
	
	@Autowired
	private FeedbackAnswerDao answerdao;
	
//	@Override
//	public List<StudentAttendanceDTO> getAllAttendance(Long studentId) {
//		Student student = studentDao.findById(studentId).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid Dept id !!!"));
//	    List<StudentAttendance> attendancelist
//	         = studAttendance.findByStudentId(studentId);
//		return attendancelist.stream() //Stream<Emp>
//				.map(emp -> mapper.map(emp, StudentAttendanceDTO.class)) //Stream<DTO>
//				.collect(Collectors.toList());
//		}
//
//	@Override
//	public FeedbackDTO updateFeedback(Long facultyId,Long studentId,FeedbackDTO feedback) {
//		Student student = studentDao.findById(studentId).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
//		Faculty faculty = facultydao.findById(facultyId).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
//		Feedback feedback1 = feedbackdao.findByFacultyId(facultyId);
//		mapper.map(feedback,feedback1);
//		feedback1.setFaculty(faculty);
//		feedback1.setStudent(student);
//		return feedbackdao.findByStudentId(studentId);
//	}

//	@Override
//	public List<ExamDTO> getExamDetails(Long studentId) {
//		Student student = studentDao.findById(studentId).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
//		List<Exam> examlist = examdao.findByStudentId(studentId);
//		return examlist.stream() //Stream<Emp>
//				.map(exam -> mapper.map(exam, ExamDTO.class)) //Stream<DTO>
//				.collect(Collectors.toList());
//	}

	@Override
	public Student getStudentById(Long studentId) {
		return studentDao.findById(studentId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
	}

	@Override
	public StudentRespDto UpdateStudentDetails(Long studId,StudentAddDto dto) {
		Student stud = studentDao.findById(studId)
				
		     .orElseThrow(() -> new ResourceNotFoundException("Invalid student ID , student not found !!!!"));
		     //mapper.map(dto, stud);
		    stud.setId(studId);
		    stud.setFirstName(dto.getFirstName());
		    stud.setLastName(dto.getLastName());
		    stud.setEmail(dto.getEmail());
	        studentDao.save(stud);
			return mapper.map(stud, StudentRespDto.class);
	}

	
	//testing not done  //changed
	@Override
	public StudentFeedbackRespDto giveFeedbackToFaculty(StudentFeedbackAddDto s) {
		
		Student st = studentDao.findById(s.getStudentId()).
				orElseThrow(() -> new ResourceNotFoundException("Invalid student id !!!"));
		 
		StudentFeedback stFeedback = mapper.map(s, StudentFeedback.class);
		
		ScheduledFeedback scFeedback = scheduledfeedbackdao.findById(s.getScheduledFeedbackId()).
				orElseThrow(() -> new ResourceNotFoundException("Invalid scheduled feedback id !!!"));
		
		
		//for setting feedback answer relations
		List<FeedbackAnswerForStudentDto> answerdtos= s.getAnswers();
		
		
		List<FeedbackAnswer> answers = answerdtos.stream()
				.map(answer -> mapper.map(answer,FeedbackAnswer.class))
				.collect(Collectors.toList());
		
//		for (FeedbackAnswerForStudentDto answer : answerdtos) {
//			
//			FeedbackAnswer ans = new FeedbackAnswer();
//			
//			ans.setAnswer(answer.getAnswer());
//			FeedbackQuestion q = questiondao.findById(answer.getQuestionid())
//					.orElseThrow(() -> new ResourceNotFoundException("Invalid question feedback id !!!"));;
//			 q.addAnswer(ans);
//			 stFeedback.addAnswer(ans);
//			
//		}
		
		for (int i =0; i < answerdtos.size();i++) {
			
			FeedbackQuestion q = questiondao.findById(answerdtos.get(i).getQuestionid())
					.orElseThrow(() -> new ResourceNotFoundException("Invalid question feedback id !!!"));
		
			q.addAnswer(answers.get(i));
			 stFeedback.addAnswer(answers.get(i));
		
		}

		
		scFeedback.addStudentFeedbacks(stFeedback);
		st.addStudentFeedback(stFeedback);
		
		StudentFeedback persistentStFeedback = studentfeedbackdao.save(stFeedback);
		return mapper.map(persistentStFeedback, StudentFeedbackRespDto.class);
	}
	
	@Override
	public StudentFeedbackRespDto getFeedbackOfStudentForFaculty(Long sid,Long fid)
	{
		Student st = studentDao.findById(sid).
				orElseThrow(() -> new ResourceNotFoundException("Invalid student id !!!"));
		
//		Faculty f = facultydao.findById(fid).
//				orElseThrow(() -> new ResourceNotFoundException("Invalid faculty id !!!"));
		
		ScheduledFeedback scheduledFeedback = scheduledfeedbackdao.findByFacultyId(fid);
		
		StudentFeedback sf = studentfeedbackdao.findByStudentIdAndScheduledFeedbackId(sid, scheduledFeedback.getId());
		
		return mapper.map(sf, StudentFeedbackRespDto.class);
	
	}
	
	
	@Override
	public List<AssignmentDto> viewAssignments(Long sid) {
		List<Assignment> assignments = assignmentdao.findByStudentId(sid);
		
		return assignments.stream()
				.map(assignment -> mapper.map(assignment,AssignmentDto.class))
				.collect(Collectors.toList());

	}

	@Override
	public StudentSignInResponse signInStudent(StudentSignInRequest signRequest) {
		Student student = studentDao.findByEmailAndPassword(signRequest.getEmail(),signRequest.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Email or Password!!!!"));
		
		
		return mapper.map(student,StudentSignInResponse.class);
	}
	
	@Override
		public List<SetFeedbackRespDto> getAllScheduledAssignmentForStudent(Long sid) {
			List<ScheduledFeedback> feedbacks = scheduledfeedbackdao.findAll();
			List<ScheduledFeedback> feedbacksToSend = new ArrayList<ScheduledFeedback>();
			for (ScheduledFeedback scheduledFeedback : feedbacks) {
				boolean flag = false;
				List<StudentFeedback> sts   =  scheduledFeedback.getStudentFeedbacks();
				for (StudentFeedback s : sts) {
					if(s.getStudent().getId()==sid)
					{
						flag = true;
					}
				}
				if(flag==false)
				{
					feedbacksToSend.add(scheduledFeedback);
				}
				else
				{
					continue;
				}
				
			}
		
			
			return feedbacksToSend.stream()
					.map(feedback -> mapper.map(feedback,SetFeedbackRespDto.class))
					.collect(Collectors.toList());
					
		}
	
}
