package com.app.dto;


import com.app.entities.Admin;
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
public class AuthRespForAdmin {
	private Long id;

	private AdminAddResp admin;

	private UserRole role;

	private String token;
}
