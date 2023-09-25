package com.app.dto;

import java.util.List;

import com.app.entities.FeedbackQuestion;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FeedbackCategoryRespDto {

	@JsonProperty(access = Access.READ_ONLY) 
	private Long id;
	
	private String categoryName;
	
	private List<FeedbackRespQuestionForScheduledFeedback> questions;
}
