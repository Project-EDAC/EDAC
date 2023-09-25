package com.app.dto;

import javax.persistence.Column;

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
public class AdminAddResp {
	
	private Long id;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String password;
	
	

	

}
