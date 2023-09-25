package com.app.entities;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name ="user_detail")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class User extends BaseEntity {
	

	

	@Column(name = "email")
	private String email;
	
	@Column(name = "password")
	private String password;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 30)
	private UserRole role;
	
	
	
	@OneToOne(mappedBy = "user")
	private Admin admin;
	
	@OneToOne(mappedBy = "user")
	private Faculty faculty;
	
	@OneToOne(mappedBy = "user")
	private Student student;

}
