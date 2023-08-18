package com.app.service;

import com.app.dto.SignInResponse;
import com.app.dto.SignRequest;

public interface AdminService {
	
	SignInResponse signInAdmin(SignRequest signRequest);

}
