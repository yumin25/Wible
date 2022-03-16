package com.ssafy.wible.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.wible.model.entity.Review;

public interface ReviewRepository extends JpaRepository<Review, Integer>{
}
