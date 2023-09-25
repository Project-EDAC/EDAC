package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.ApiResponse;

public interface facImageHandlingService {
	ApiResponse facUploadImage(Long id, MultipartFile image) throws IOException;
	byte[] facDownloadImage(Long id) throws IOException;
}
