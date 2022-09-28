package com.ssafy.wible.repository;

import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.model.enums.Country;
import com.ssafy.wible.model.enums.Type;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface WineSearchRepositoryCustom {
    Page<Wine> findBySearchOption(String keyword, int start, int end, List<Type> types, List<Integer> body, int tannin, List<Integer> sweet, int acidity, List<Country> countries, Pageable pageable);
}
