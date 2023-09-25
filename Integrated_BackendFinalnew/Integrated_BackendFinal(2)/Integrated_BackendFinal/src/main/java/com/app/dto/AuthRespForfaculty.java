package com.app.dto;

import com.app.entities.UserRole;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class AuthRespForfaculty {

	
	private Long id;

	private FacultyRespDto faculty;

	private UserRole role;

	private String token;
}
