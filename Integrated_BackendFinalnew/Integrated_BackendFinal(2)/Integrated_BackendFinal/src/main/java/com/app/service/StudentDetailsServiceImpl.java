package com.app.service;

import javax.transaction.Transactional;

import org.apache.catalina.mapper.Mapper;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.StudentDao;
import com.app.dao.StudentDetailsDao;
import com.app.dto.StudentdetailsDTO;
import com.app.entities.Student;
import com.app.entities.Studentdetails;

@Service
@Transactional
public class StudentDetailsServiceImpl implements StudentDetailsService {

	@Autowired
	private StudentDetailsDao studDetailsDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private StudentDetailsDao studDetDao;
	
	
public StudentdetailsDTO addStudDetails(Long studId,StudentdetailsDTO student)
{ 
	Student stud1 = studentDao.findById(studId).
			orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
	Studentdetails stud = mapper.map(student,Studentdetails.class);
	stud.setStudent(stud1);;
	return mapper.map(studDetailsDao.save(stud), StudentdetailsDTO.class) ;
}

public StudentdetailsDTO getStudDetails(Long studId) {
	Student stud1 = studentDao.findById(studId).
			orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
	Studentdetails studDetails = studDetDao.findByStudentId(studId);
	return mapper.map(studDetails, StudentdetailsDTO.class);
}

public StudentdetailsDTO updateStudDetails(Long studId,StudentdetailsDTO student) {
	Student stud1 = studentDao.findById(studId).
			orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));	
	Studentdetails studDetails = studDetDao.findByStudentId(studId);
	mapper.map(student, studDetails);
	studDetails.setStudent(stud1);
	return mapper.map(studDetails, StudentdetailsDTO.class);
}



}
