package com.ssafy.wible.model.response.user;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserResponse {

    @ApiModelProperty(value = "valid")
    public int user_seq;
    @ApiModelProperty(value = "email")
    public String email;
    @ApiModelProperty(value = "name")
    public String name;
    @ApiModelProperty(value = "nickname")
    public String nickname;
    @ApiModelProperty(value = "phone")
    public String phone;
}
