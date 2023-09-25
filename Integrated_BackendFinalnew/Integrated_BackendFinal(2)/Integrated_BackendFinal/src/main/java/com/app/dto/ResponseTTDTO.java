package com.app.dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ResponseTTDTO {

	
	private Long id;  
	
    private LocalDate startDate;
	
	private LocalDate endDate;
	
    private String subjectName;
	
	private String facultyName;
}
