package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.entities.User;


public interface UserDao extends JpaRepository<User, Long> {

	public User findByEmailAndPassword(String mail, String pass);

	public Optional<User> findByEmail(String mail);

	boolean existsByEmail(String email);

}
