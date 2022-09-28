package com.ssafy.wible.repository;

import com.ssafy.wible.model.entity.Wine;
import static com.ssafy.wible.model.entity.QWine.wine;

import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.wible.model.enums.Country;
import com.ssafy.wible.model.enums.Type;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.util.StringUtils;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;


public class WineSearchRepositoryImpl extends QuerydslRepositorySupport implements WineSearchRepositoryCustom {
    @Autowired
    private JPAQueryFactory queryFactory;

    public WineSearchRepositoryImpl(){
        super(Wine.class);
    }

    @Override
    public Page<Wine> findBySearchOption(String keyword, int start, int end, List<Type> types, List<Integer> body, int tannin, List<Integer> sweet, int acidity, List<Country> countries, Pageable pageable) {
        JPQLQuery<Wine> query = queryFactory.selectFrom(wine)
                .where(containsKeyword(keyword), betweenPrice(start, end), equalsType(types), equalsBody(body), equalsTannin(tannin), equalsSweet(sweet), equalsAcidity(acidity), equalsCountry(countries));
        List<Wine> list = this.getQuerydsl().applyPagination(pageable, query).fetch();
        return new PageImpl<Wine>(list, pageable, query.fetchCount());
    }

    private BooleanExpression containsKeyword(String keyword){
        if(StringUtils.hasText(keyword)) return wine.kname.contains(keyword);
        return null;
    }

    private BooleanExpression betweenPrice(int start, int end){
        start = start * 10000;
        if(end >= 100) end = Integer.MAX_VALUE;
        else end = end * 10000;
        return wine.price.between(start, end);
    }

    private BooleanExpression equalsType(List<Type> types){
        if(types.size() != 0) return wine.type.in(types);
        return null;
    }

    private BooleanExpression equalsBody(List<Integer> body){
        if(body != null) return wine.body.in(body);
        return null;
    }

    private BooleanExpression equalsSweet(List<Integer> sweet){
        if(sweet != null) return wine.sweet.in(sweet);
        return null;
    }

    private BooleanExpression equalsTannin(int tannin){
        if(tannin != -1) return wine.tannin.eq(tannin);
        return null;
    }

    private BooleanExpression equalsAcidity(int acidity){
        if(acidity != -1) return wine.acidity.eq(acidity);
        return null;
    }

    private BooleanExpression equalsCountry(List<Country> countries){
        if(countries.size() != 0) return wine.country.in(countries);
        return null;
    }
}
