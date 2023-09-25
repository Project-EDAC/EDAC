package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.ScheduleAssignment;

public interface ScheduledAssignmentDao extends JpaRepository<ScheduleAssignment, Long> {

}
