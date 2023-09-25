package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.app.entities.UserRole;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

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
public class AdminAddReq {

//	@JsonProperty(access = Access.READ_ONLY)
//	private Long id;
	
	@NotBlank
	private String firstName;
	
	@NotBlank
	private String lastName;
	
	@NotBlank
	@Email
	private String email;
	
	private String password;
	
	//private String confirmPassword;

	private UserRole role;
}
