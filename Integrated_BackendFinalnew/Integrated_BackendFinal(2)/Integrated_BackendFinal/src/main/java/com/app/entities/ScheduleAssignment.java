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
@Table(name = "scheduled_assignment")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ScheduleAssignment extends BaseEntity {

	//Faculty : schedule assignment
	
	@Column(name = "assignment_description")
	private String assignmentDescription;
	
	@Column(name = "gitrepo_link")
	private String gitRepoLink;
	
	@Column(name = "due_date")
	private LocalDate dueDate;
	
	
	@ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
	@JoinColumn(name = "subject_id")
	private Subject subject;
	
	
	@OneToMany(mappedBy = "scheduledAssignment",cascade =  CascadeType.ALL,orphanRemoval = true)
	private List<Assignment> assignments = new ArrayList<>();
	
	public void addAssignment(Assignment a)
	{
		assignments.add(a);
		a.setScheduledAssignment(this);
		
	}
	
	public void removeAssignment(Assignment a)
	{
		assignments.remove(a);
		a.setScheduledAssignment(null);
	}
	
}
