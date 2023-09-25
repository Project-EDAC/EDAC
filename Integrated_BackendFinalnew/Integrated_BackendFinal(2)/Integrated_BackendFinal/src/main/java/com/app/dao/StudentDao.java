package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Student;

public interface StudentDao extends JpaRepository<Student, Long> {

	
	Optional<Student> findByEmailAndPassword(String em,String pwd);
	
	Student findByUserId(Long uid);

}
