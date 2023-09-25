package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Faculty;

public interface FacultyDao extends JpaRepository<Faculty, Long> {

	Optional<Faculty> findByEmailAndPassword(String em,String pwd);
	
	   Faculty  findByUserId(Long uid);
}
