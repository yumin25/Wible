package com.ssafy.wible.model.request.wine;

import javax.validation.constraints.NotBlank;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class WineDetailRequest {
	
	@ApiModelProperty(required = true)
	@NotBlank
	private int userSeq;
	@ApiModelProperty(required = true)
	@NotBlank
	private int wineSeq;
}
