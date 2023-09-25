package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.FeedbackAnswer;

public interface FeedbackAnswerDao extends JpaRepository<FeedbackAnswer, Long> {

}
