package com.app.dto;

import java.time.LocalDate;

import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;

import com.app.entities.Subject;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class ScheduledAssignmentRespDto {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private String assignmentDescription;
	
	private String gitRepoLink;
	
	private LocalDate dueDate;
	
	private SubjectDto subject;
}
