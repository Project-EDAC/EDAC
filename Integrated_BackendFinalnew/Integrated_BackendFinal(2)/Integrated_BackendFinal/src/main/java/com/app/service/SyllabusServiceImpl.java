package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.SyllabusDao;
import com.app.dto.SyllabusDTO;
import com.app.entities.Syllabus;

@Service
@Transactional
public class SyllabusServiceImpl implements SyllabusService {

	@Autowired
	private SyllabusDao sylDao;
	
	@Autowired
	private ModelMapper mapper;
	
	public SyllabusDTO addSyllabus(SyllabusDTO syl) {
		Syllabus syllabus = mapper.map(syl,Syllabus.class);
		return mapper.map(sylDao.save(syllabus),SyllabusDTO.class);
	}
	
	public List<Syllabus> getSyllabus() {
		List<Syllabus> list = sylDao.findAll();
		return list ;
	}
	
}
