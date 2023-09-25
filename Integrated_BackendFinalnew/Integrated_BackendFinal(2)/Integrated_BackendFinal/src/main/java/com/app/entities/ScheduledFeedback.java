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
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "scheduled_feedback")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ScheduledFeedback extends BaseEntity {

	
	
	
//	@ManyToMany(cascade =CascadeType.PERSIST)
//	@JoinTable(name = "student_feedback",joinColumns = @JoinColumn(name="feedback_id"),
//	inverseJoinColumns = @JoinColumn(name = "student_id"))
//	private List<Student> student = new ArrayList<Student>();
	
//	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
//	@JoinColumn(name = "student_id")
//	private Student student;

	
//	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
//	@JoinColumn(name = "faculty_id")
//	private Faculty faculty;
	@OneToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="faculty_id")
	//@MapsId
	private Faculty faculty;
	
	
//	@Column(name="feedback_date")
//	private LocalDate feedbackDate;
	
//	@Column(name = "comment")
//	private String extraComment;
//	
	
//	@OneToMany(mappedBy = "feedback",cascade = CascadeType.ALL,orphanRemoval = true)
//	private List<FeedbackCategory> categories = new ArrayList<FeedbackCategory>();
	@ManyToMany(mappedBy = "feedbacks")
	private List<FeedbackCategory> categories = new ArrayList<FeedbackCategory>();
	
	
	@OneToMany(mappedBy = "scheduledFeedback",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<StudentFeedback> studentFeedbacks = new ArrayList<>();
	
	public void addCategory(FeedbackCategory c)
	{
		categories.add(c);
		c.getFeedbacks().add(this);
	}

	public void removeCategory(FeedbackCategory c)
	{
		categories.remove(c);
		c.getFeedbacks().remove(this);
	}
	
	public void addStudentFeedbacks(StudentFeedback s)
	{
		studentFeedbacks.add(s);
		s.setScheduledFeedback(this);
	}
	
	public void removeStudentFeedbacks(StudentFeedback s)
	{
		studentFeedbacks.remove(s);
		s.setScheduledFeedback(null);
	}
//	public void addStudent(Student s)
//	{
//		student.add(s);
//		s.getFeedbacks().add(this);
//	}
//	
//	public void removeStudent(Student s)
//	{
//		student.remove(s);
//		s.getFeedbacks().remove(this);
//	}

}
