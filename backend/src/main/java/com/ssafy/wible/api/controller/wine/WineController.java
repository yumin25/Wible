package com.ssafy.wible.api.controller.wine;

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

import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.model.request.wine.ReviewCreateRequest;
import com.ssafy.wible.service.WineService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@CrossOrigin(origins = { "*" }, methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE} , maxAge = 6000)
@RestController
@RequestMapping("/wine")
@Api("와인 컨트롤러")
public class WineController {
	
	@Autowired
	private WineService wineService;
	
	private static final String SUCCESS = "success";
	private static final String FAIL = "fail";

	@ApiOperation(value = "wine detail", notes = "와인 상세조회", response = Wine.class)
	@GetMapping("/{wineSeq}")
	public ResponseEntity<Wine> wineGet(@PathVariable("wineSeq") @ApiParam(value = "와인 번호.", required = true) int wineSeq) {
		return new ResponseEntity<Wine>(wineService.wineGet(wineSeq), HttpStatus.OK);
	}
	
	@ApiOperation(value = "review create", notes = "리뷰 작성, DB입력 성공여부에 따라 'success' 또는 'fail' 문자열을 반환한다.", response = String.class)
	@PostMapping("/review")
	public ResponseEntity<String> replyContent(@RequestBody @ApiParam(value = "리뷰 내용.", required = true) ReviewCreateRequest request) {
		wineService.reviewCreate(request);
	    return new ResponseEntity<String>(SUCCESS, HttpStatus.OK);
	}


	
}
