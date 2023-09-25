package com.app.entities;

import java.time.LocalDate;
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
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "exam")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Exam extends BaseEntity{

	@Column(name = "exam_description")
	private String examDescription;
	
	@Column(name = "exam_date")
	private LocalDate examDate;
	

	@OneToMany(mappedBy = "exam",cascade =  CascadeType.ALL,orphanRemoval = true)
	private List<ExamResult> examResults = new ArrayList<>();

	
//	@ManyToMany(cascade = CascadeType.PERSIST)
//	@JoinTable(name = "student_exam",joinColumns = @JoinColumn(name= "exam_id"),
//	inverseJoinColumns = @JoinColumn(name = "student_id"))
//	private List<Student> student = new ArrayList<Student>();
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "subject_id")
	private Subject subject;
	
//	public void addStudent(Student s)
//	{
//		student.add(s);
//		s.getExams().add(this);
//	}
//	
//	public void removeStudent(Student s)
//	{
//		student.remove(s);
//		s.getExams().remove(this);
//	}
	
	
	
}
