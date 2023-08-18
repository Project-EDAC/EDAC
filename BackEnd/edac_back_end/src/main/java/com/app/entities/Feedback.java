package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ManyToAny;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "feedback")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Feedback extends BaseEntity {

	@Column(name = "feedback_text")
	private String feedbackText;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
	@JoinColumn(name = "student_id")
	private Student student;
	
	@ManyToOne(fetch = FetchType.LAZY,cascade =CascadeType.MERGE)
	@JoinColumn(name = "faculty_id")
	private Faculty faculty;

}