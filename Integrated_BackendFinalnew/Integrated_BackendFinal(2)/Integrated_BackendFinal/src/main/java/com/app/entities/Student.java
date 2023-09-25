package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
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
	
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name= "user_id")
	private User user;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "course_id")
	private Course course;
	
//	@ManyToMany(mappedBy = "student")
//	private List<ScheduledFeedback> feedbacks = new ArrayList<ScheduledFeedback>();
	
	@OneToMany(mappedBy = "student",cascade =  CascadeType.ALL,orphanRemoval = true)
	private List<StudentFeedback> feedbacks = new ArrayList<>();
	
	@OneToMany(mappedBy = "student",cascade =  CascadeType.ALL,orphanRemoval = true)
	private List<ExamResult> examResults = new ArrayList<>();
	
	@OneToMany(mappedBy = "student",cascade =  CascadeType.ALL,orphanRemoval = true)
	private List<Assignment> assignment = new ArrayList<>();
	
	@OneToMany(mappedBy = "student",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<StudentAttendance> attendance = new ArrayList<>();
	
	@OneToOne(mappedBy = "student")
	private Studentdetails studentDetails;
	
	public void addStudentFeedback(StudentFeedback f)
	{
		feedbacks.add(f);
		f.setStudent(this);
	}
	
	public void removeStudentFeedback(StudentFeedback f)
	{
		feedbacks.remove(f);
		f.setStudent(null);
	}
	
	
//	public void addExam(Exam e)
//	{
//		exams.add(e);
//		e.getStudent().add(this);
//	}
//	
//	public void removeExam(Exam e)
//	{
//		exams.remove(e);
//		e.getStudent().remove(this);
//	}
	
	
	public void addAssignment(Assignment a)
	{
		assignment.add(a);
		a.setStudent(this);
	}
	
	public void removeAssignment(Assignment a)
	{
		assignment.remove(a);
		a.setStudent(null);
	}

	public void addStudentAttendance(StudentAttendance at)
	{
		attendance.add(at);
		at.setStudent(this);
	}
	
	public void removeStudentAttendance(StudentAttendance at)
	{
		attendance.remove(at);
		at.setStudent(null);
	}
	
}
