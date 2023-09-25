package com.app.entities;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "feedback_question")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class FeedbackQuestion extends BaseEntity {

	@Column(name = "question_text")
	private String question;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "category_id")
	private FeedbackCategory category;
	
//	
//	@OneToOne(mappedBy = "question")
//	private FeedbackAnswer answer;

	@OneToMany(mappedBy = "question",cascade = {CascadeType.MERGE, CascadeType.REFRESH, CascadeType.DETACH},orphanRemoval = true)
	private List<FeedbackAnswer> answers = new ArrayList<>();
	
	
	
	public void addAnswer(FeedbackAnswer a)
	{
		answers.add(a);
		a.setQuestion(this);
	}
	
	public void removeAnswer(FeedbackAnswer a)
	{
		answers.remove(a);
		a.setAnswer(null);
	}
	
	//	@Enumerated
//	@Column(name = "answer")
//	private FeedbackAnswer answer;
}
