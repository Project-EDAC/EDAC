package com.app.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ExamRespDto {
	
	private String examDescription;
	
	private LocalDate examDate;
	 

}
