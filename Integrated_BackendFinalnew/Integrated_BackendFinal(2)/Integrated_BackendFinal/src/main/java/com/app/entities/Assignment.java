package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
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
		
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
	@JoinColumn(name = "student_id")
	private Student student;
	
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
	@JoinColumn(name = "scheduled_assignment_id")
	private ScheduleAssignment scheduledAssignment;
	
//	@Column(name ="assignment_status")
//	private boolean status;
	
	@Enumerated(EnumType.STRING)
	@Column(name ="assignment_status")
	private AssignmentStatus status;
//	public void addStudent(Student s)
//	{
//		student.add(s);
//		s.getAssignment().add(this);
//	}
//	
//	public void removeStudent(Student s)
//	{
//		student.remove(s);
//		s.getAssignment().remove(this);
//	}

}
