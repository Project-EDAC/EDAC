package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "student_feedback")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class StudentFeedback  extends BaseEntity{
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
	@JoinColumn(name = "student_id")
	private Student student;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
	@JoinColumn(name = "scheduled_feedback_id")
	private ScheduledFeedback scheduledFeedback;
	
	@OneToMany(mappedBy = "feedback",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<FeedbackAnswer> answers = new ArrayList<>();
	
	@Column(name="feedback_date")
	private LocalDate feedbackDate;
	
	@Column(name = "comment")
	private String extraComment;
	
	
	public void addAnswer(FeedbackAnswer a)
	{
		answers.add(a);
		a.setFeedback(this);
	}
	
	public void removeAnswer(FeedbackAnswer a)
	{
		answers.remove(a);
		a.setFeedback(null);
	}

}
