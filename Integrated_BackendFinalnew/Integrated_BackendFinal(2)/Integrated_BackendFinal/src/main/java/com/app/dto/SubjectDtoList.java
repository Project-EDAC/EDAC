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
public class SubjectDtoList {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private String name;
	
	//private Course course;

}
