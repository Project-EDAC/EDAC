package com.app.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "course")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Course extends BaseEntity {
	
	@Column(name = "course_name")
	private String name;
	
	@OneToMany(mappedBy = "course",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Student> student = new ArrayList<Student>();
	
	@OneToMany(mappedBy = "course",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Subject> subject = new ArrayList<Subject>();

	public void addStudent(Student s)
	{
		student.add(s);
		s.setCourse(this);
	}
	
	public void removeStudent(Student s)
	{
		student.remove(s);
		s.setCourse(null);
	}

	public void addSubject(Subject s)
	{
		subject.add(s);
		s.setCourse(this);
	}
	
	public void removeSubject(Subject s)
	{
		subject.remove(s);
		s.setCourse(null);
	}
}
