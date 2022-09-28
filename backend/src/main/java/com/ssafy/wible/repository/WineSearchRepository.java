package com.ssafy.wible.repository;

import com.ssafy.wible.model.entity.Wine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WineSearchRepository extends JpaRepository<Wine, Long>, WineSearchRepositoryCustom{
}
