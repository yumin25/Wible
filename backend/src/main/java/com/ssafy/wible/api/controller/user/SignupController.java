package com.ssafy.wible.api.controller.user;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wible.model.request.user.SignupRequest;
import com.ssafy.wible.model.response.user.ValidResponse;
import com.ssafy.wible.service.SignupService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@CrossOrigin(origins = { "*" }, methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE} , maxAge = 6000)
@RestController
@RequestMapping("/user")
@Api("회원관리 컨트롤러")
public class SignupController {
	
	@Autowired
	private SignupService signupService;

	@PostMapping
	@ApiOperation(value = "가입하기")
	public Object signup(@RequestBody @Valid SignupRequest request) {
		signupService.signup(request);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/email/{email}")
	@ApiOperation(value = "email 중복 검사")
	public Object emailCheck(@PathVariable String email) {
		ValidResponse response = new ValidResponse();
		response.valid = !signupService.emailCheck(email);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@GetMapping("/nickname/{nickname}")
	@ApiOperation(value = "닉네임 중복 검사")
	public Object nicknameCheck(@PathVariable String nickname) {
		ValidResponse response = new ValidResponse();
		response.valid = !signupService.nicknameCheck(nickname);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	
	@GetMapping("/phone/{phone}")
	@ApiOperation(value = "핸드폰 번호 중복 검사")
	public Object phoneCheck(@PathVariable String phone) {
		ValidResponse response = new ValidResponse();
		response.valid = !signupService.phoneCheck(phone);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
