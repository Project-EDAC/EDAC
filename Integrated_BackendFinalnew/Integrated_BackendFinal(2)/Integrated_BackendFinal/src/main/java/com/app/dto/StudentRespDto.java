package com.app.dto;

import javax.validation.constraints.Email;
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
public class StudentRespDto {
	
	private Long id;
	
	
	private String firstName;
	
	
	private String lastName;
	
	
	private String email;

	//private Course course;
}
