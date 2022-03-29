package com.ssafy.wible.model.response.wine;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SimpleWineResponse {
    private int wineSeq;
    private String kname;
    private String ename;
    private String img_path;
    private int price;
}