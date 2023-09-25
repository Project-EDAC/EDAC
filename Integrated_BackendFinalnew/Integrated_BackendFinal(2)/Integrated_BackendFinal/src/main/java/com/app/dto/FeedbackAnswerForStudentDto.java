package com.app.dto;

import com.app.entities.FeedbackAnswersEnum;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class FeedbackAnswerForStudentDto {

	
private FeedbackAnswersEnum answer;
	
//	private StudentFeedbackAnswerDto feedback;
//	
	private Long questionid;
//	
}
