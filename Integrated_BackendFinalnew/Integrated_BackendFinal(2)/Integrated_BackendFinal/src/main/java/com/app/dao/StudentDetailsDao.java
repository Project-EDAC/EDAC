package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Studentdetails;

public interface StudentDetailsDao extends JpaRepository<Studentdetails, Long>{
	Studentdetails findByStudentId(Long studId);
}
