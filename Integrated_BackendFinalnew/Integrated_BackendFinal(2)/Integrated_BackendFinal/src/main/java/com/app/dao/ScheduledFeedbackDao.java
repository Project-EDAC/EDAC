package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ScheduledFeedback;

public interface ScheduledFeedbackDao extends JpaRepository<ScheduledFeedback, Long> {

	
	ScheduledFeedback findByFacultyId(Long fId);
	
	
	
}
