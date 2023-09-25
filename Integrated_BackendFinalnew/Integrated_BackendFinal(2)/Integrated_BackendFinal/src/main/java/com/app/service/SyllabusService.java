package com.app.service;

import java.util.List;

import com.app.dto.SyllabusDTO;
import com.app.entities.Syllabus;

public interface SyllabusService {
	SyllabusDTO addSyllabus(SyllabusDTO syl) ;
	public List<Syllabus> getSyllabus();
}
