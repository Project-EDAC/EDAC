package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class AdminSignInRequest {

	@NotBlank(message = "Email can't be blank or null!!!")
//	@Email(message = "Invalid email format!!!!")
	private String email;
	
	@NotBlank(message = "Password Required!!!!")
//return new ResponseEntity<>(adminService.signInAdmin(signInAdmin),HttpStatus.OK);	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Blank or invalid password")
	private String password;
	
}
