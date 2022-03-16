package com.ssafy.wible.model.response.wine;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SimpleWineResponse {
    private String kname;
    private String img_path;
    private int price;
}