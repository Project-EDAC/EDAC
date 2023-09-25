package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.FeedbackCategory;

public interface FeedbackCategoryDao extends JpaRepository<FeedbackCategory, Long> {

}
