package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.StudentAcademic;

public interface StudentAcademicDao extends JpaRepository<StudentAcademic, Long>{
	StudentAcademic findByStudentId(Long StudId);
}
