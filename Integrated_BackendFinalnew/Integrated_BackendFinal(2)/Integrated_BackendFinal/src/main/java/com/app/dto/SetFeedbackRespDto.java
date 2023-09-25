package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.app.entities.Faculty;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class SetFeedbackRespDto {

	
	//private LocalDate feedbackDate;
	@JsonProperty(access = Access.READ_ONLY) 
	private Long id;
	
	
	private FacultyRespDto faculty;
	
	private List<FeedbackCategoryRespDto> categories = new ArrayList<FeedbackCategoryRespDto>();
}
