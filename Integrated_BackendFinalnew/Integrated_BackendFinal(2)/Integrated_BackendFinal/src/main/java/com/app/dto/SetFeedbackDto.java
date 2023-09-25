package com.app.dto;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.app.entities.FeedbackCategory;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@ToString
public class SetFeedbackDto {

	private Long facultyId;
	
	//private LocalDate feedbackDate;
	
//	private List<FeedbackCategoryDto> categories = new ArrayList<FeedbackCategoryDto>();
}
