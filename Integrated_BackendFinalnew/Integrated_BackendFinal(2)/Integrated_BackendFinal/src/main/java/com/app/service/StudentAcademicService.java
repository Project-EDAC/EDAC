package com.app.service;

import com.app.dto.StudentAcademicDTO;
import com.app.dto.StudentdetailsDTO;

public interface StudentAcademicService {
	StudentAcademicDTO addStudentAcademics(Long id,StudentAcademicDTO student);
	StudentAcademicDTO getStudentAcademics(Long id);
	StudentAcademicDTO updateStudAcaDetails(Long studId,StudentAcademicDTO student);
}
