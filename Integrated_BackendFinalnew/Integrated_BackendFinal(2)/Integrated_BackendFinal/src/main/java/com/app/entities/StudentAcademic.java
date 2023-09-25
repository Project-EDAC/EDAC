package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "student_academics")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StudentAcademic extends BaseEntity {
	
	@Column(name = "10th_marks")
	private Double tenthMarks;
	
	@Column(name = "12th_marks")
	private Double twelthMarks;
	
	@Column(name = "diploma_marks")
	private Double diplomaMarks;
	
	@Column(name = "graduation_marks")
	private Double graduation;
	
	@Column(name = "postgraduation_marks")
	private Double postGraduationmarks;
	
	@Column(name = "graduation_project")
	private String graduationProject;
	
	@Column(name = "postgraduation_project")
	private String postGraduationProject;
	
	@OneToOne
    @JoinColumn(name = "student_id")
	@MapsId
    private Student student;
	
	@Column(name = "work_experience")
	private String workExperience;
	
}
