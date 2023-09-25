package com.app.dto;

import javax.validation.constraints.NotBlank;

import com.app.entities.Course;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
public class SubjectDto {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	@NotBlank
	private String name;
	
//	@NotBlank
//	private Course course;
	
	private Long courseid;
}
