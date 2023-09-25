package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

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
//@FieldMatch.List({
//    @FieldMatch(first = "password", second = "confirmPassword", message = "The password fields must match")
//})
public class AdminChangePwdRequest {

	
	@NotBlank(message = "Password Required!!!!")
	//@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Blank or invalid password")
	private String password;
	
	@NotBlank(message = "Confirm Password Required!!!!")
//	@Pattern(regexp = "((?=.*\\d)(?=.*[a-z])(?=.*[#@$*]).{5,20})",message = "Blank or invalid Confirm password")
	private String confirmPassword;
	
	
	
}
