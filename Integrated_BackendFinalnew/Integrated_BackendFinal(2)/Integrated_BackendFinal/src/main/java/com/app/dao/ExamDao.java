package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Exam;

public interface ExamDao extends JpaRepository<Exam, Long> {

}
