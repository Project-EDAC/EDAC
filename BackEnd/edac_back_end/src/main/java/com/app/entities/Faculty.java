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
import javax.persistence.Table;

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
	
	@OneToMany(mappedBy = "faculty",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<Feedback> feedback = new ArrayList<Feedback>();
	
	@ManyToMany(mappedBy = "faculty")
	private List<Subject> subject = new ArrayList<>();
	
	@OneToMany(mappedBy = "faculty",cascade = CascadeType.ALL,orphanRemoval = true)
	private List<FacultyAttendance> attendance = new ArrayList<>();

}
