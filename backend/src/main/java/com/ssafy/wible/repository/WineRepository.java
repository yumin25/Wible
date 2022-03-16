package com.ssafy.wible.repository;

import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.model.enums.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface WineRepository extends JpaRepository<Wine, Integer>, JpaSpecificationExecutor<Wine> {
    List<Wine> findTop5ByTypeEqualsOrderByLikeCntDesc(Type type);
    List<Wine> findTop5ByTypeEqualsOrderByReviewCntDesc(Type type);
    List<Wine> findTop5ByTypeEqualsOrderByScoreDesc(Type type);
}