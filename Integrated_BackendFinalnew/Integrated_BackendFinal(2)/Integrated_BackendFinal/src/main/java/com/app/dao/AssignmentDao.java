package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Assignment;

public interface AssignmentDao extends JpaRepository<Assignment, Long> {

	
	Assignment findByStudentIdAndScheduledAssignmentId(Long sid, Long said);
	
	List<Assignment> findByStudentId(Long sid);
}
