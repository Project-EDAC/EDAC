package com.app.dto;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;

import com.app.entities.FeedbackAnswersEnum;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class StudentFeedbackCalculatedDto {

	private  HashMap<String, HashMap<FeedbackAnswersEnum, Double>> questionsAndPercentage;
	
	private SetFeedbackRespDto scheduledFeedback;
	
	
	
	private List<String> extraComments;
	
}
