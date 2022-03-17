package com.ssafy.wible.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ssafy.wible.config.security.JwtTokenProvider;
import com.ssafy.wible.model.entity.User;
import com.ssafy.wible.repository.UserRepository;

@Service
public class LoginService {


	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private JwtTokenProvider jwtTokenProvider;
	
	public String login(String email, String password){
		User member = userRepository.findByEmail(email);
		if(member == null) throw new IllegalArgumentException("가입되지 않은 E-MAIL 입니다.");
        if (!passwordEncoder.matches(password, member.getPassword())) throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        
        return jwtTokenProvider.createToken(member.getUsername(), member.getRoles());
    }
}
