package com.app.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
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
@Table(name = "faculty_details")
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class FacultyDetails extends BaseEntity{
	
	private String prn;
	
	private LocalDate dob;
	
	@Column(name = "mob_no",length = 15)
	private String mobileNo;
	
	@Column(name = "altmob_no",length = 15)
	private String altMobileNo;
	
	@Column(name = "img_path")
	private String imagePath;
	
	private String address;
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name = "faculty_id")
	private Faculty faculty;
	
}
