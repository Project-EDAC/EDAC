package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "student")
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false,doNotUseGetters = true,of = "email")
public class Student extends BaseEntity {

	@Column(name="first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "course_id")
	private Course course;
	
	@OneToMany(mappedBy = "student",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Feedback> feedbacks = new ArrayList<Feedback>();
	
	@OneToMany(mappedBy = "student",cascade =  CascadeType.ALL,orphanRemoval = true)
	private List<Exam> exams = new ArrayList<Exam>();
	
	@OneToMany(mappedBy = "student",cascade =  CascadeType.ALL,orphanRemoval = true)
	private List<Assignment> assignment = new ArrayList<>();
	
	@OneToMany(mappedBy = "student",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<StudentAttendance> attendance = new ArrayList<>();
	
	
}