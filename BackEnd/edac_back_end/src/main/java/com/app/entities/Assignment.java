package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "assignment")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Assignment extends BaseEntity {
	
	@Column(name = "assignment_description")
	private String assignmentDescription;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "student_id")
	private Student student;
	
	@Column(name = "due_date")
	private LocalDate dueDate;
	
	private boolean status;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "subject_id")
	private Subject subject;

}
