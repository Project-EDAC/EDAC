package com.app.entities;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "feedback_Answers")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class FeedbackAnswer extends BaseEntity {

	@Enumerated(EnumType.STRING)
	private FeedbackAnswersEnum answer;
	
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
	@JoinColumn(name = "student_feedback_id")
	private StudentFeedback feedback;

	
//	@OneToOne(fetch = FetchType.LAZY)
//	@JoinColumn(name="feedback_question_id")
//	//@MapsId
//	private FeedbackQuestion question;
	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "question_id")
	private FeedbackQuestion question;
	
}
