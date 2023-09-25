package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.entities.Result;

public interface ResultDao extends JpaRepository<Result, Long> {

}
