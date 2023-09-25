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
@Table(name = "feedback_category")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class FeedbackCategory extends BaseEntity {

	@Column(name = "name")
	private String categoryName;
	
//	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
//	@JoinColumn(name = "feedback_id")
//	private Feedback feedback;
	@ManyToMany(cascade =CascadeType.PERSIST)
	@JoinTable(name = "feedback_category_join",joinColumns = @JoinColumn(name="category_id",referencedColumnName = "id"),
	inverseJoinColumns = @JoinColumn(name = "feedback_id",referencedColumnName = "id"))
	private List<ScheduledFeedback> feedbacks = new ArrayList<ScheduledFeedback>();
	
	
	@OneToMany(mappedBy = "category",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<FeedbackQuestion> questions = new ArrayList<>();
	
	
	public void addQuestion(FeedbackQuestion q)
	{
		questions.add(q);
		q.setCategory(this);
	}
	
	public void removeQuestion(FeedbackQuestion q)
	{
		questions.remove(q);
		q.setCategory(null);
	}
	
	public void addFeedback(ScheduledFeedback f)
	{
		feedbacks.add(f);
		f.getCategories().add(this);
	}
	
	public void removeFeedback(ScheduledFeedback f)
	{
		feedbacks.remove(f);
		f.getCategories().remove(this);
	}
	
}
