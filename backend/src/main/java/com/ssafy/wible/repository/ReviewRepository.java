package com.ssafy.wible.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.wible.model.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer>{

	List<Review> findAllByUserSeq(int userSeq);
	Page<Review> findBywineSeq(int wineSeq, Pageable pageable);
}
