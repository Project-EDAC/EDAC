package com.app.entities;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "faculty_attendance")
@NoArgsConstructor
@Getter
@Setter
@ToString
//Integration remaining
public class FacultyAttendance extends BaseEntity {

	private LocalDate date;
	
	private Boolean status;
	
    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.MERGE)
    @JoinColumn(name = "faculty_id")
    private Faculty faculty;
}
