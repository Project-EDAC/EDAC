package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.FeedbackQuestion;

public interface FeedbackQuestionDao extends JpaRepository<FeedbackQuestion, Long> {

}
