package com.ssafy.wible.model.request.wine;

import java.time.LocalDateTime;

import javax.validation.constraints.NotBlank;

import com.ssafy.wible.model.entity.Likes;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class WineLikeRequest {
	@ApiModelProperty(required = true)
	@NotBlank
	private int userSeq;
	
	@ApiModelProperty(required = true)
	@NotBlank
	private int wineSeq;
	
	@ApiModelProperty(required = true)
	@NotBlank
	private LocalDateTime registerDate;
	
	public Likes toEntity() {
		return Likes.builder()
				    .userSeq(userSeq)
		            .wineSeq(wineSeq)
		            .registerDate(registerDate)
		            .build();
	}
	
}
