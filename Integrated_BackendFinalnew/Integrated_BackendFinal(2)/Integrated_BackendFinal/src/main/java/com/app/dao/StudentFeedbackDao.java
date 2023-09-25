package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.entities.ScheduledFeedback;
import com.app.entities.StudentFeedback;

public interface StudentFeedbackDao extends JpaRepository<StudentFeedback, Long> {

	List<StudentFeedback> findByScheduledFeedbackId(Long said);
	
	//findByScheduledFeedbackIdAndStudentId
	
//	 @Query("SELECT f FROM StudentFeedback f " +
//		       "JOIN FETCH f.student " +
//		       "LEFT JOIN FETCH f.answers ans " +
//		       "LEFT JOIN FETCH f.categories " +
//		       "WHERE f.id = :feedbackId")
//	 StudentFeedback fetchFeedbackWithCategories(@Param("feedbackId") Long feedbackId);

//	@Query("select f from StudentFeedback f " +
//			 "join fetch f.student " +
//			" join fetch f.scheduledFeedback"+
//			 "join fetch f.scheduledFeedback.categories " +
//			"join fetch f.scheduledFeedback.categories.questions "+
//			 "join fetch f.scheduledFeedback.categories.questions.answer "+
//			"where f.id = :feedbackid"
//			 
//			
//			)
	

	
	
	
	StudentFeedback  findByStudentIdAndScheduledFeedbackId(Long sid, Long fid);

}
