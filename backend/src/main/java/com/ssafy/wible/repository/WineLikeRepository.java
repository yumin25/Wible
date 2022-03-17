package com.ssafy.wible.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.wible.model.entity.Likes;

public interface WineLikeRepository extends JpaRepository<Likes, Integer>{
	
}
