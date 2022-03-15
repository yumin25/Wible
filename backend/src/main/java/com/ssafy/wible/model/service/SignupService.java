package com.ssafy.wible.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.wible.model.entity.User;
import com.ssafy.wible.model.repository.UserRepository;
import com.ssafy.wible.model.request.user.SignupRequest;

@Service
public class SignupService {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public void signup(SignupRequest request){
		request.setPassword(passwordEncoder.encode(request.getPassword()));
		User user = request.toEntity();
		userRepository.save(user);

	}
}
