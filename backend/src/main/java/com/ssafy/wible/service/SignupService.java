package com.ssafy.wible.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.wible.model.entity.User;
import com.ssafy.wible.model.request.user.SignupRequest;
import com.ssafy.wible.repository.UserRepository;

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
	
	public boolean emailCheck(String email) {
		return userRepository.existsByEmail(email);
	}

	public boolean nicknameCheck(String nickname) {
		return userRepository.existsByNickname(nickname);
	}

	public boolean phoneCheck(String phone) {
		return userRepository.existsByPhone(phone);
	}
}
