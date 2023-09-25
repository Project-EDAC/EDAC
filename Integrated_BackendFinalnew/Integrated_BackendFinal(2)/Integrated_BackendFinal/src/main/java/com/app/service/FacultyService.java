package com.app.service;

import java.util.List;

import com.app.dto.AssignmentDto;
import com.app.dto.FacultyDTO;
import com.app.dto.FacultyRespDto;
import com.app.dto.FacultySignInRequest;
import com.app.dto.FacultySignInResponse;
import com.app.dto.ReqStudentAttendanceDTO;
import com.app.dto.ResponseTTDTO;
import com.app.dto.ScheduleAssignmentDto;
import com.app.dto.ScheduledAssignmentRespDto;
import com.app.dto.StudentFeedbackCalculatedDto;
import com.app.dto.StudentFeedbackRespDto;
import com.app.dto.SubjectDtoList;
import com.app.entities.StudentFeedback;

public interface FacultyService {
	FacultyDTO getFaculty(Long facultyId);
	ReqStudentAttendanceDTO addStudAttByFaculty(Long facultyId,ReqStudentAttendanceDTO studAtt);
	List<ResponseTTDTO> getTimetable (Long facultyId);
	
	FacultySignInResponse signInFaculty(FacultySignInRequest signRequest);
	
	/////////////new/////////////
	List<ScheduledAssignmentRespDto> getAllScheduledAssignments();
	String deleteScheduledAssignmentDetails(Long said);
	
	List<AssignmentDto> getAllStudentAssignment();
	
    ScheduledAssignmentRespDto scheduleAssignment(ScheduleAssignmentDto s);
	String changeStatusOfAssignment(Long studentid, Long scheduledassignmentid);
	StudentFeedbackCalculatedDto getAllStudentFeedbackForFaculty(Long fid);
	
	
	List<SubjectDtoList> getAllSubject();
	
}
