package com.app.dto;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.FutureOrPresent;
import javax.validation.constraints.NotBlank;

import com.app.entities.Subject;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class ScheduleAssignmentDto {


	@NotBlank
	private String assignmentDescription;
	
	@NotBlank
	private String gitRepoLink;
	
	@FutureOrPresent
	private LocalDate dueDate;
	
	private Long subjectId;
}
