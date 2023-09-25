package com.app.service;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.FacultyDao;
import com.app.dao.FacultyDetailsDao;
import com.app.dto.FacultyDetailsDTO;
import com.app.entities.Faculty;
import com.app.entities.FacultyDetails;

@Service
@Transactional
public class FacultyDetailsServiceImpl implements FacultyDetailsService{
	
	@Autowired
	private FacultyDetailsDao facDetDao;
	
	@Autowired
	private FacultyDao facultyDao;
	
	@Autowired
	private ModelMapper mapper;
	
	public FacultyDetailsDTO addFacDetails(Long facultyId,FacultyDetailsDTO faculty)
	{ 
		Faculty fac = facultyDao.findById(facultyId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
		FacultyDetails faculty1 = mapper.map(faculty,FacultyDetails.class);
		faculty1.setFaculty(fac);
		return mapper.map(facDetDao.save(faculty1), FacultyDetailsDTO.class) ;
	}

	public FacultyDetailsDTO getFacDetails(Long facultyId) {
		Faculty fac = facultyDao.findById(facultyId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
		FacultyDetails facDetails = facDetDao.findById(facultyId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
		return mapper.map(facDetails, FacultyDetailsDTO.class);
	}

	public FacultyDetailsDTO updateFacDetails(Long studId,FacultyDetailsDTO faculty) {
		Faculty fac = facultyDao.findById(studId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));	
		FacultyDetails facDetails = facDetDao.findById(studId).
				orElseThrow(() -> new ResourceNotFoundException("Invalid id !!!"));
	    mapper.map(faculty, facDetails);
	    facDetails.setFaculty(fac);
		return mapper.map(facDetails, FacultyDetailsDTO.class);
	}
	
}
