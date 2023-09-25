package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.FacultyAcademic;
import com.app.entities.StudentAcademic;

public interface FacultyAcademicDao extends JpaRepository<FacultyAcademic, Long>{

	FacultyAcademic findByFacultyId(Long StudId);
}
