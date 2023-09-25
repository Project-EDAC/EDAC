package com.app.dto;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.app.entities.AssignmentStatus;
import com.app.entities.ScheduleAssignment;
import com.app.entities.Student;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class AssignmentDto {

	private StudentRespDto student;
	
	private ScheduledAssignmentRespDto scheduledAssignment;
	
	private AssignmentStatus status;
	
}
