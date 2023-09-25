package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Transient;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "timetable")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class TimeTable extends BaseEntity {
	// we can access faculty indirectly from subject id
	
	@OneToOne
	@JoinColumn(name = "subject_id")
	private Subject subject;
	
	@OneToOne
	@JoinColumn(name = "faculty_id")
	private Faculty faculty;
	
	@Column(name = "start_date")
	private LocalDate startDate;
	
	@Column(name = "end_date")
	private LocalDate endDate;
	
	@Column(name = "subject_name")
	private String subjectName;
	
	@Column(name = "faculty_name")
	private String facultyName;
}
