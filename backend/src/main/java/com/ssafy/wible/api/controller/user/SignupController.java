package com.ssafy.wible.api.controller.user;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.wible.model.request.user.SignupRequest;
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

	@PostMapping("/signup")
	@ApiOperation(value = "가입하기")
	public Object signup(@RequestBody @Valid SignupRequest request) {
		signupService.signup(request);
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
