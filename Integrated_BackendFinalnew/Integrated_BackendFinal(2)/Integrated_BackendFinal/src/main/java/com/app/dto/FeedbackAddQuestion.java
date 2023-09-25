package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class FeedbackAddQuestion {

	@NotBlank
	private String question;
	
	private Long categoryid;
	
}
