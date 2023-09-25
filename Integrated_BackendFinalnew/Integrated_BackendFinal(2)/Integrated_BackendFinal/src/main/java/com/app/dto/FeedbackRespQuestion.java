package com.app.dto;

import java.time.LocalDate;

import com.app.entities.FeedbackAnswer;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class FeedbackRespQuestion {

	//@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private String question;
	
	private FeedbackCategoryForRespAnsDto category;
}
