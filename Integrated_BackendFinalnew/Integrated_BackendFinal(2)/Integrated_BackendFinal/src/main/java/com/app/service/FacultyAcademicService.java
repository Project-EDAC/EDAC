package com.app.service;

import com.app.dto.FacultyAcademicDTO;
import com.app.dto.StudentAcademicDTO;
import com.app.dto.StudentdetailsDTO;

public interface FacultyAcademicService {
	FacultyAcademicDTO updateFacAcaDetails(Long id, FacultyAcademicDTO faculty);
	FacultyAcademicDTO getFacultyAcademics(Long id);
	FacultyAcademicDTO addFacAcademics(Long id,FacultyAcademicDTO faculty);
}
