package com.app.dto;

import com.app.entities.FeedbackAnswersEnum;
import com.app.entities.FeedbackQuestion;
import com.app.entities.StudentFeedback;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class FeedbackAnswerDto {

	//private FeedbackQuestion question;
	
	private FeedbackAnswersEnum answer;
	
//	private StudentFeedbackAnswerDto feedback;
//	
	private FeedbackRespQuestion question;
//	
}
