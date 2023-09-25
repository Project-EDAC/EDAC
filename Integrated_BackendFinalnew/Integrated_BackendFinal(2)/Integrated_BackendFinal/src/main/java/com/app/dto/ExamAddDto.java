package com.app.dto;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ExamAddDto {

	@NotBlank
	private String examDescription;
	
	@DateTimeFormat
	private LocalDate examDate;
	
	
	private Long subjectid;
}
