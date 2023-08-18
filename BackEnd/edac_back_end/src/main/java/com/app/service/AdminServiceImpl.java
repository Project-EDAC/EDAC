package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminDao;
import com.app.dto.SignInResponse;
import com.app.dto.SignRequest;
import com.app.entities.Admin;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public SignInResponse signInAdmin(SignRequest signRequest) {
		
		Admin admin = adminDao.findByEmailAndPassword(signRequest.getEmail(),signRequest.getPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Invalid Email or Password!!!!"));
		
		
		return mapper.map(admin,SignInResponse.class);
	}

}