package com.app.service;

import com.app.dto.FacultyDetailsDTO;

public interface FacultyDetailsService {
	FacultyDetailsDTO addFacDetails(Long facultyId,FacultyDetailsDTO faculty);
	FacultyDetailsDTO getFacDetails(Long facultyId);
	FacultyDetailsDTO updateFacDetails(Long studId,FacultyDetailsDTO faculty);
}
