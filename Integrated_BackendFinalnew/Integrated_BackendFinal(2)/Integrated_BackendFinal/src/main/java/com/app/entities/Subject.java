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

//	@ManyToMany(cascade = CascadeType.PERSIST)
//	@JoinTable(name = "subject_faculty",joinColumns = @JoinColumn(name= "subject_id"),
//	inverseJoinColumns = @JoinColumn(name = "faculty_id"))
//	private List<Faculty> faculty = new ArrayList<Faculty>();
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "faculty_id")
	private Faculty faculty;
	
	@OneToMany(mappedBy = "subject",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Exam> exams = new ArrayList<Exam>();
	
	@OneToMany(mappedBy = "subject",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<ScheduleAssignment> assignment = new ArrayList<ScheduleAssignment>();
	
	@OneToOne(mappedBy = "subject")
	private TimeTable timetable;
	
	
//	public void addFaculty(Faculty f)
//	{
//		faculty.add(f);
//		f.getSubject().add(this);
//	}
//	
//	public void removeFaculty(Faculty f)
//	{
//		faculty.remove(f);
//		f.getSubject().remove(this);
//	}
	
	public void addExam(Exam e)
	{
		exams.add(e);
		e.setSubject(this);
	}
	
	public void removeExam(Exam e)
	{
		exams.remove(e);
		e.setSubject(null);
	}
	
	public void addAssignment(ScheduleAssignment a)
	{
		assignment.add(a);
		a.setSubject(this);
	}
	
	public void removeAssignment(ScheduleAssignment a)
	{
		assignment.remove(a);
		a.setSubject(null);
	}

}
