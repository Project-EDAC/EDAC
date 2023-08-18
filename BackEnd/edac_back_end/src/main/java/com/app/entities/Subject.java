package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "subject")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Subject extends BaseEntity {
	
	@Column(name = "subject_name")
	private String name;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "course_id")
	private Course course;

	@ManyToMany(cascade = CascadeType.PERSIST)
	@JoinTable(name = "subject_faculty",joinColumns = @JoinColumn(name= "subject_id"),
	inverseJoinColumns = @JoinColumn(name = "faculty_id"))
	private List<Faculty> faculty = new ArrayList<Faculty>();
	
	@OneToMany(mappedBy = "subject",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Exam> exams = new ArrayList<Exam>();
	
	@OneToMany(mappedBy = "subject",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Assignment> assignment = new ArrayList<Assignment>();
	
	@OneToOne(mappedBy = "subject")
	private TimeTable timetable;

}
