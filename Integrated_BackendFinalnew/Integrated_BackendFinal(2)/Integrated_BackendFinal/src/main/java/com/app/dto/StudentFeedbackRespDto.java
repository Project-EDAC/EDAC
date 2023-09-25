package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.app.entities.FeedbackAnswer;
import com.app.entities.ScheduledFeedback;
import com.app.entities.Student;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class StudentFeedbackRespDto {

	private StudentRespDto student;
	
	private SetFeedbackRespDto scheduledFeedback;
	
	private List<FeedbackAnswerDto> answers ;
	
	private LocalDate feedbackDate;
	
	private String extraComment;
}
