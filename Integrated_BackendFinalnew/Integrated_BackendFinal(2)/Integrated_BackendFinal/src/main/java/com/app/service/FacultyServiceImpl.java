package com.app.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AssignmentDao;
import com.app.dao.FacultyDao;
import com.app.dao.FeedbackQuestionDao;
import com.app.dao.ScheduledAssignmentDao;
import com.app.dao.ScheduledFeedbackDao;
import com.app.dao.StudentAttendanceDao;
import com.app.dao.StudentDao;
import com.app.dao.StudentFeedbackDao;
import com.app.dao.SubjectDao;
import com.app.dao.TimeTableDao;
import com.app.dto.AdminSignInResponse;
import com.app.dto.AssignmentDto;
import com.app.dto.FacultyDTO;
import com.app.dto.FacultySignInRequest;
import com.app.dto.FacultySignInResponse;
import com.app.dto.ReqStudentAttendanceDTO;
import com.app.dto.RespStudentAttendanceDTO;
import com.app.dto.ResponseTTDTO;
import com.app.dto.ScheduleAssignmentDto;
import com.app.dto.ScheduledAssignmentRespDto;
import com.app.dto.SetFeedbackRespDto;
import com.app.dto.StudentFeedbackCalculatedDto;
import com.app.dto.StudentFeedbackRespDto;
import com.app.dto.StudentRespDto;
import com.app.dto.SubjectDtoList;
import com.app.dto.TimeTableDTO;
import com.app.entities.Admin;
import com.app.entities.Assignment;
import com.app.entities.AssignmentStatus;
import com.app.entities.Faculty;
import com.app.entities.FacultyDetails;
import com.app.entities.FeedbackAnswer;
import com.app.entities.FeedbackAnswersEnum;
import com.app.entities.FeedbackQuestion;
import com.app.entities.ScheduleAssignment;
import com.app.entities.ScheduledFeedback;
import com.app.entities.Student;
import com.app.entities.StudentAttendance;
import com.app.entities.StudentFeedback;
import com.app.entities.Subject;
import com.app.entities.TimeTable;

@Service
@Transactional
public class FacultyServiceImpl implements FacultyService{
	
	@Autowired
	private FacultyDao facultyDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private StudentDao studDao;
	
	@Autowired
	private StudentAttendanceDao studAttDao;
	
	@Autowired
	private TimeTableDao ttDao;
	
	@Autowired
	private SubjectDao subjectdao;
	
	@Autowired
	private AssignmentDao assignmentdao;
	
	@Autowired
	private ScheduledAssignmentDao scheduledassignmentdao;
	
	@Autowired
	private ScheduledFeedbackDao scheduledfeedbackdao;
	
	@Autowired
	private StudentFeedbackDao studentfeedbackdao;
	
	@Autowired
	private FeedbackQuestionDao feedbackquestiondao; 
	
	
	public FacultyDTO getFaculty(Long facultyId) {
		Faculty faculty = facultyDao.findById(facultyId).orElseThrow();
		return mapper.map(faculty,FacultyDTO.class);
	}
	
	public ReqStudentAttendanceDTO addStudAttByFaculty(Long facultyId,ReqStudentAttendanceDTO studAtt) {
		Faculty faculty = facultyDao.findById(facultyId).orElseThrow();
		Student stud = studDao.findById(studAtt.getStudentId()).orElseThrow();
		StudentAttendance studAt = new StudentAttendance();
		studAt.setDate(studAtt.getDate());
		studAt.setStatus(studAtt.getStatus());
		studAt.setStudent(stud);
		return mapper.map(studAttDao.save(studAt), ReqStudentAttendanceDTO.class);
	}
	
	public List<ResponseTTDTO> getTimetable (Long facultyId)
	{
		Faculty faculty = facultyDao.findById(facultyId).orElseThrow();
		 List<TimeTable> ttlist
         = ttDao.findByFacultyId(facultyId);
	return  ttlist.stream() //Stream<Emp>
			.map(tt -> mapper.map(tt, ResponseTTDTO.class)) //Stream<DTO>
			.collect(Collectors.toList());
		
	}

	@Override
	public FacultySignInResponse signInFaculty(FacultySignInRequest signRequest) {
		Faculty faculty = facultyDao.findByEmailAndPassword(signRequest.getEmail(),signRequest.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Email or Password!!!!"));
		
		
		return mapper.map(faculty,FacultySignInResponse.class);
	}
	
	//////////////////////Assignment//////////////////////////////////
	
	
	@Override
	public ScheduledAssignmentRespDto scheduleAssignment(ScheduleAssignmentDto s)
	{
		ScheduleAssignment scheduledAssignment = mapper.map(s, ScheduleAssignment.class);
		
		//System.out.println(scheduledAssignment);
		//System.out.println(s.getSubjectId());
		Subject st = subjectdao.findById(s.getSubjectId()).
				orElseThrow(() -> new ResourceNotFoundException("Invalid subject id !!!"));
		
		//System.out.println(st);
		
		st.addAssignment(scheduledAssignment);
		//scheduledAssignment.setSubject(st);
		//System.out.println(scheduledAssignment);
//		Assignment assignment = new Assignment();
//		assignment.setScheduledAssignment(scheduledAssignment);
		List<Student> students = studDao.findAll();
		
		for (Student student : students) {
			
			Assignment assignment = new Assignment();
			assignment.setStatus(AssignmentStatus.NOT_SUBMITTED);
			//assignment.setScheduledAssignment(scheduledAssignment);
			student.addAssignment(assignment);
			scheduledAssignment.addAssignment(assignment);
			//Assignment persistentAssignment = assignmentdao.save(assignment);
			assignmentdao.save(assignment);
		}
		
		ScheduleAssignment persistentAssignment = scheduledassignmentdao.save(scheduledAssignment);
		
		return mapper.map(persistentAssignment, ScheduledAssignmentRespDto.class);
	}
	
	
	@Override
	public List<AssignmentDto> getAllStudentAssignment() {
		List<Assignment> assignments = assignmentdao.findAll();
		
		
		return assignments.stream()
				.map(assignment-> mapper.map(assignment, AssignmentDto.class))
				.collect(Collectors.toList());
		
	}
	
	@Override
	public String changeStatusOfAssignment(Long studentid, Long scheduledassignmentid) {
		
		Assignment assignment = assignmentdao.findByStudentIdAndScheduledAssignmentId(studentid, scheduledassignmentid);
		
		if(assignment.getStatus()==AssignmentStatus.SUBMITTED)
		{
			assignment.setStatus(AssignmentStatus.NOT_SUBMITTED);
			return "changed to nOt submitted";
		}
		else
		{
			assignment.setStatus(AssignmentStatus.SUBMITTED);
			return "changed to submitted";
		}
		
		
	}
	
	
	@Override
	public String deleteScheduledAssignmentDetails(Long said) {
		ScheduleAssignment sa = scheduledassignmentdao.findById(said)
				.orElseThrow(() -> new ResourceNotFoundException("Invalid scheduled Assignment id !!!"));
		
		scheduledassignmentdao.delete(sa);
		return "scheduled assignment deleted successfully";
	}
	
	@Override
	public List<ScheduledAssignmentRespDto> getAllScheduledAssignments() {
		List<ScheduleAssignment> assignments = scheduledassignmentdao.findAll();
		
		
		return assignments.stream()
				.map(assignment-> mapper.map(assignment, ScheduledAssignmentRespDto.class))
				.collect(Collectors.toList());
		
	}
	

@Override
	public StudentFeedbackCalculatedDto getAllStudentFeedbackForFaculty(Long fid) {
		ScheduledFeedback f = scheduledfeedbackdao.findByFacultyId(fid);
		
		List<StudentFeedback> stfeedbacks = studentfeedbackdao.findByScheduledFeedbackId(f.getId());
		 
		
		List<String> extraComments = new ArrayList<String>();
		
		for (StudentFeedback s : stfeedbacks) {
			extraComments.add(s.getExtraComment());
		}
		
		
		HashMap<Long, HashMap<FeedbackAnswersEnum, Integer>> answerCounters = new HashMap<>();

        for (StudentFeedback studentFeedback : stfeedbacks) {
            List<FeedbackAnswer> answers = studentFeedback.getAnswers();

            for (FeedbackAnswer ans : answers) {
                Long questionId = ans.getQuestion().getId();
                FeedbackAnswersEnum answerType = ans.getAnswer();

                // Initialize counters for the question if not already present
                long questionIdPrimitive = questionId != null ? questionId : 0L;
                answerCounters.putIfAbsent(questionIdPrimitive, new HashMap<>());
                HashMap<FeedbackAnswersEnum, Integer> questionCounters = answerCounters.get(questionIdPrimitive);

                // Update the corresponding counter based on the answer type
                questionCounters.put(answerType, questionCounters.getOrDefault(answerType, 0) + 1);
            }
        }

        // Calculate and store percentages for each question
        HashMap<Long, HashMap<FeedbackAnswersEnum, Double>> answerPercentages = new HashMap<>();
        for (Long questionId : answerCounters.keySet()) {
            HashMap<FeedbackAnswersEnum, Integer> questionCounters = answerCounters.get(questionId);
            int totalAnswers = questionCounters.values().stream().mapToInt(Integer::intValue).sum();

            HashMap<FeedbackAnswersEnum, Double> questionPercentages = new HashMap<>();
            for (FeedbackAnswersEnum answerType : questionCounters.keySet()) {
                int answerCount = questionCounters.get(answerType);
                double percentage = (double) answerCount / totalAnswers * 100;
                questionPercentages.put(answerType, percentage);
            }

            answerPercentages.put(questionId, questionPercentages);
        }
        
        
        HashMap<String, HashMap<FeedbackAnswersEnum, Double>> questionsAndPercentage = new HashMap<>();
        
        for(Long questionId : answerPercentages.keySet())
        {
        	FeedbackQuestion q = feedbackquestiondao.findById(questionId)
        			.orElseThrow(() -> new ResourceNotFoundException("Invalid question id !!!"));
        	questionsAndPercentage.put(q.getQuestion(), answerPercentages.get(questionId));
        	
        }
 
        StudentFeedbackCalculatedDto response = new StudentFeedbackCalculatedDto();
		
        
        response.setExtraComments(extraComments);
        response.setQuestionsAndPercentage(questionsAndPercentage);
        SetFeedbackRespDto ff = new SetFeedbackRespDto();
        mapper.map(f, ff);
        response.setScheduledFeedback(ff);
        
        return response;
        
//		return stfeedbacks.stream()
//				.map(feedback->mapper.map(feedback, StudentFeedbackRespDto.class))
//				.collect(Collectors.toList());
		
		
	}

@Override
public List<SubjectDtoList> getAllSubject() {
	List<Subject> subjects = subjectdao.findAll();
	
	List<SubjectDtoList> subjectDtos = subjects.stream()
											.map(e -> mapper.map(e, SubjectDtoList.class))
											.collect(Collectors.toList());
	return subjectDtos;
}

	
	
}
