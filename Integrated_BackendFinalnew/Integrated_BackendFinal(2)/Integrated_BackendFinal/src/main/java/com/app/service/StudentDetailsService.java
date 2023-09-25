package com.app.service;

import com.app.dto.StudentdetailsDTO;
import com.app.entities.Studentdetails;

public interface StudentDetailsService {
	StudentdetailsDTO addStudDetails(Long studId,StudentdetailsDTO student);
	StudentdetailsDTO getStudDetails(Long studId);
	StudentdetailsDTO updateStudDetails(Long studId,StudentdetailsDTO student);
}
