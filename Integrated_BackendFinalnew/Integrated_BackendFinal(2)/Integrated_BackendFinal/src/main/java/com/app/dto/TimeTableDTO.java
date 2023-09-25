package com.app.dto;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class TimeTableDTO {
	// we can access faculty indirectly from subject id
	
//	@JsonProperty(access = Access.READ_ONLY)
//	@Id
//    private Long id;
	
	private LocalDate startDate;
	
	private LocalDate endDate;
	
    private Long subjectId;
	
	private Long facultyId;
	
	
}
