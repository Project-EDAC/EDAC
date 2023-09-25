package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.app.entities.FeedbackAnswer;
import com.app.entities.ScheduledFeedback;
import com.app.entities.Student;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
public class StudentFeedbackAddDto {
	
	
	private Long studentId;
	
	private Long scheduledFeedbackId;
	
	private List<FeedbackAnswerForStudentDto> answers = new ArrayList<>();
	
	
	private LocalDate feedbackDate;
	
	
	private String extraComment;

}
