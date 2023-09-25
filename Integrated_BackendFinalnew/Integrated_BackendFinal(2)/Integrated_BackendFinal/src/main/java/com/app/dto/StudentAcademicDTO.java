package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StudentAcademicDTO  {
	
	private Double tenthMarks;
	
	private Double twelthMarks;

	private Double diplomaMarks;
	
	private Double graduation;
	
	private Double postGraduationmarks;
	
	private String graduationProject;
	
	private String postGraduationProject;
	
	private String workExperience;
	
}
