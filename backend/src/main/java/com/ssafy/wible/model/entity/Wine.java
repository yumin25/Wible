package com.ssafy.wible.model.entity;

import com.ssafy.wible.model.enums.Country;
import com.ssafy.wible.model.enums.Type;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Wine {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "wine_seq")
    private int wineSeq;
    private String kname;
    private String ename;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Type type;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Country country;

    private String winery;
    private String grapes;
    private String alcohol;
    private int price;
    private int body;
    private int tannin;
    private int sweet;
    private int acidity;
    private String imgPath;
    private String food;
    @Column(name = "like_cnt")
    private int likeCnt;

    @Column(name = "review_cnt")
    private int reviewCnt;
    private double score;
}