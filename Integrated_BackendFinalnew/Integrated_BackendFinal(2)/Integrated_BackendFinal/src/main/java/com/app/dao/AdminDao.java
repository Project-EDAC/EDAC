package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Admin;
import java.lang.String;
import java.util.List;

public interface AdminDao extends JpaRepository<Admin, Long> {
	
	//Optional<Admin> findByEmailAndPassword(String em,String pwd);
	//Admin findByEmailAndEmail(String em,String pwd);

	Optional<Admin> findByEmailAndPassword(String email,String password);
	
	               Admin  findByUserId(Long uid);
}
