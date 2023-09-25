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
import javax.persistence.Transient;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "faculty")
@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false,doNotUseGetters = true,of = "email")
public class Faculty extends BaseEntity {
	
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
	
//	@OneToMany(mappedBy = "faculty",cascade = CascadeType.ALL,orphanRemoval = true)
//	private List<ScheduledFeedback> feedback = new ArrayList<ScheduledFeedback>();
	@OneToOne(mappedBy = "faculty")
	private ScheduledFeedback scheduledFeedback;
	
	

	@OneToMany(mappedBy = "faculty",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Subject> subject = new ArrayList<>();
	
	
	@OneToMany(mappedBy = "faculty",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<FacultyAttendance> attendance = new ArrayList<>();
	
	
	
	@OneToOne(mappedBy = "faculty")
	private FacultyDetails facDetails;
	
	@OneToOne(mappedBy = "faculty")
	private FacultyAcademic facAcaDetail;
	
	
//	public void addFeedback(ScheduledFeedback f) {
//		feedback.add(f);// dept --> emp
//		f.setFaculty(this);// emp --> dept
//	}
//
//	public void removeFeedback(ScheduledFeedback f) {
//		feedback.remove(f);
//		f.setFaculty(null);
//	}
	
	
	public void addSubject(Subject s)
	{
		subject.add(s);
		//s.getFaculty().add(this);
		s.setFaculty(this);
		
	}
	
	public void removeSubject(Subject s)
	{
		subject.remove(s);
		//s.getFaculty().remove(this);
		s.setFaculty(null);
	}
	
	
	

}
