package com.app.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

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
public class FacultyAcademicDTO  {
	
	private Double tenthMarks;
	
	private Double twelthMarks;
	
	private Double diplomaMarks;
	
	private Double graduation;
	
	private Double postGraduationmarks;
	
	private String workExperience;

}
