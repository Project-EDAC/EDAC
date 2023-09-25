package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.AdminDao;
import com.app.dao.FacultyDao;
import com.app.dao.SubjectDao;
import com.app.dao.TimeTableDao;
import com.app.dto.ResponseTTDTO;
import com.app.dto.TimeTableDTO;
import com.app.entities.Admin;
import com.app.entities.Faculty;
import com.app.entities.Subject;
import com.app.entities.TimeTable;

@Service
@Transactional
public class TimeTableServiceImpl implements TimeTableService{

	@Autowired
	private TimeTableDao ttDao;
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private FacultyDao facDao;
	
	@Autowired
	private SubjectDao subDao;
	
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public TimeTableDTO addTimeTable(TimeTableDTO timetable) {
//		Admin admin = adminDao.findById(adminId).orElseThrow();
		Faculty faculty = facDao.findById(timetable.getFacultyId()).orElseThrow();
		Subject sub = subDao.findById(timetable.getSubjectId()).orElseThrow();
		String name = faculty.getFirstName() + faculty.getLastName();
		TimeTable tt = new TimeTable();
		tt.setStartDate(timetable.getStartDate());
		tt.setEndDate(timetable.getEndDate());
		tt.setFaculty(faculty);
		tt.setSubject(sub);
		tt.setFacultyName(name);
		tt.setSubjectName(sub.getName());
		return mapper.map(ttDao.save(tt),TimeTableDTO.class);
	}

	@Override
	public List<ResponseTTDTO> getTimeTable() {
		List<TimeTable> list = ttDao.findAll();
		return list.stream() //Stream<Emp>
				.map(emp -> mapper.map(emp, ResponseTTDTO.class)) //Stream<DTO>
				.collect(Collectors.toList());
	}

}
