package com.ssafy.wible.repository;

import com.ssafy.wible.model.entity.Wine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface WineRepository extends JpaRepository<Wine, Integer>, JpaSpecificationExecutor<Wine> {
}
