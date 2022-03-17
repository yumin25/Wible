package com.ssafy.wible.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wible.model.entity.Review;
import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.model.request.wine.ReviewCreateRequest;
import com.ssafy.wible.repository.ReviewRepository;
import com.ssafy.wible.repository.WineRepository;

@Service
public class WineService {
	@Autowired
	private WineRepository wineRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	public Wine wineGet(int wineSeq) {
		return wineRepository.findById(wineSeq).orElse(null);
	}

	public void reviewCreate(ReviewCreateRequest request) {
		Review review = request.toEntity();
		reviewRepository.save(review);
	}

	public void reviewDelete(int reviewSeq) {
		reviewRepository.deleteById(reviewSeq);
	}

	public List<Review> reviewGet(int wineSeq) {
		return reviewRepository.findAllByWineSeq(wineSeq);
	}
}
