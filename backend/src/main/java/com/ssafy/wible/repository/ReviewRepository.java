package com.ssafy.wible.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.wible.model.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer>{

	List<Review> findAllByWineSeq(int wineSeq);
	List<Review> findAllByUserSeq(int userSeq);
}
