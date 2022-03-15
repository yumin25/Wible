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
    private int wine_seq;
    private String kname;
    private String ename;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Type type_seq;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Country country_seq;

    private String winery;
    private String grapes;
    private int alcohol;
    private int price;
    private int body;
    private int tannin;
    private int sweet;
    private int acidity;
    private String img_path;
    private String food;
    private int like_cnt;
    private int review_cnt;
    private double score;
}
