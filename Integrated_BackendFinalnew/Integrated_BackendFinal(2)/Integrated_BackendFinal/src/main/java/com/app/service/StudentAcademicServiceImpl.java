package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.StudentAcademicDao;
import com.app.dao.StudentDao;
import com.app.dto.StudentAcademicDTO;
import com.app.entities.Student;
import com.app.entities.StudentAcademic;

@Service
@Transactional
public class StudentAcademicServiceImpl implements StudentAcademicService {

	@Autowired
	private StudentAcademicDao studDao;
	
	@Autowired
	private StudentDao studentDao;
	
	@Autowired
	private ModelMapper mapper;
	
	public StudentAcademicDTO addStudentAcademics(Long id,StudentAcademicDTO student) {
		Student stud1 = studentDao.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
		StudentAcademic stud = mapper.map(student,StudentAcademic.class);
		stud.setStudent(stud1);
		return mapper.map(studDao.save(stud), StudentAcademicDTO.class) ;
	}
	
	public StudentAcademicDTO getStudentAcademics(Long id) {
		Student stud1 = studentDao.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
		StudentAcademic stud = studDao.findByStudentId(id);
        return mapper.map(stud, StudentAcademicDTO.class);
	}

	@Override
	public StudentAcademicDTO updateStudAcaDetails(Long studId, StudentAcademicDTO student) {
		Student stud1 = studentDao.findById(studId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));	
		StudentAcademic studDetails = studDao.findByStudentId(studId);
		mapper.map(student, studDetails);
		studDetails.setStudent(stud1);
		return mapper.map(studDetails, StudentAcademicDTO.class);
	}
	
	
}
