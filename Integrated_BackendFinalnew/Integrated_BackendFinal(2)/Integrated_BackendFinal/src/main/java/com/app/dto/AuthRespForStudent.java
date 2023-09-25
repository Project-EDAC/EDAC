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
public class AuthRespForStudent {

	
	private Long id;

	private StudentRespDto student;

	private UserRole role;

	private String token;
}
