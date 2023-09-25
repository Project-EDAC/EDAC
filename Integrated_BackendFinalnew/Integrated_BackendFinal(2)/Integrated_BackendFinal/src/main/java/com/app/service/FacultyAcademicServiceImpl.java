package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.FacultyAcademicDao;
import com.app.dao.FacultyDao;
import com.app.dao.StudentAcademicDao;
import com.app.dao.StudentDao;
import com.app.dto.FacultyAcademicDTO;
import com.app.dto.StudentAcademicDTO;
import com.app.entities.Faculty;
import com.app.entities.FacultyAcademic;
import com.app.entities.FacultyDetails;
import com.app.entities.Student;
import com.app.entities.StudentAcademic;

@Service
@Transactional
public class FacultyAcademicServiceImpl implements FacultyAcademicService {

	@Autowired
	private FacultyAcademicDao facAcaDao;
	
	@Autowired
	private FacultyDao facDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public FacultyAcademicDTO addFacAcademics(Long id,FacultyAcademicDTO faculty) {
		Faculty fac = facDao.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
		FacultyAcademic fac1 = mapper.map(faculty,FacultyAcademic.class);
		fac1.setFaculty(fac);
		return mapper.map(facAcaDao.save(fac1), FacultyAcademicDTO.class) ;
	}
	
	@Override
	public FacultyAcademicDTO getFacultyAcademics(Long id) {
		Faculty fac = facDao.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
		FacultyAcademic fac1 = facAcaDao.findByFacultyId(id);
        return mapper.map(fac1, FacultyAcademicDTO.class);
	}

	@Override
	public FacultyAcademicDTO updateFacAcaDetails(Long id, FacultyAcademicDTO faculty) {
		Faculty fac = facDao.findById(id).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
		FacultyAcademic facAca = facAcaDao.findByFacultyId(id);
	    mapper.map(faculty,facAca);
	    facAca.setFaculty(fac);
		return mapper.map(facAca, FacultyAcademicDTO.class) ;
	}
	
	
}
