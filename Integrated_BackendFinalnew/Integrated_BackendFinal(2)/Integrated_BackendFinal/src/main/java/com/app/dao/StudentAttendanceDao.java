package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.StudentAttendance;

public interface StudentAttendanceDao extends JpaRepository<StudentAttendance, Long>{

	List<StudentAttendance> findByStudentId(Long studentId);
}
