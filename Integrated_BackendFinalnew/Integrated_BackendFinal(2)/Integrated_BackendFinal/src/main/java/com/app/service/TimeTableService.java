package com.app.service;

import java.util.List;

import com.app.dto.ResponseTTDTO;
import com.app.dto.TimeTableDTO;

public interface TimeTableService {
	TimeTableDTO addTimeTable(TimeTableDTO timetable);
	List<ResponseTTDTO> getTimeTable();
}
