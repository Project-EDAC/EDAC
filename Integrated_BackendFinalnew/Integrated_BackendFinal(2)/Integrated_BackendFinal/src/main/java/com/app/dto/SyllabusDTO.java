package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class SyllabusDTO{
	
	private Long id; 
	
	private String Subject;

	private String topics;
	
	private String duration;
}
