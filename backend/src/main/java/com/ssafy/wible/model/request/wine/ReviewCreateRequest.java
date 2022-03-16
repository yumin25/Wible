package com.ssafy.wible.model.request.wine;

import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;

import com.ssafy.wible.model.entity.Review;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class ReviewCreateRequest {
	@ApiModelProperty(required = true)
	@NotBlank
	private int userSeq;
	
	@ApiModelProperty(required = true)
	@NotBlank
	private int wineSeq;
	
	@ApiModelProperty(required = true)
	@NotBlank
	private String reviewText;
	
	@ApiModelProperty(required = true)
	@NotBlank
	private double reviewScore;
	
	@ApiModelProperty(required = true)
	@NotBlank
	private LocalDateTime registerDate;
	
	
	public Review toEntity() {
		return Review.builder()
					 .userSeq(userSeq)
					 .wineSeq(wineSeq)
					 .reviewText(reviewText)
					 .reviewScore(reviewScore)
					 .registerDate(registerDate)
					 .build();
	}
}
