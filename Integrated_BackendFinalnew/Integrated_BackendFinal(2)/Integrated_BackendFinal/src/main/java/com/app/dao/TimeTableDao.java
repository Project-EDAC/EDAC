package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.TimeTable;

public interface TimeTableDao extends JpaRepository<TimeTable, Long> {

	List<TimeTable> findByFacultyId(Long id);
}
