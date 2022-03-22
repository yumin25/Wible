package com.ssafy.wible.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wible.model.entity.Likes;
import com.ssafy.wible.model.entity.Review;
import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.model.request.wine.ReviewCreateRequest;
import com.ssafy.wible.model.request.wine.WineLikeRequest;
import com.ssafy.wible.model.response.wine.WineDetailResponse;
import com.ssafy.wible.repository.ReviewRepository;
import com.ssafy.wible.repository.WineLikeRepository;
import com.ssafy.wible.repository.WineRepository;

@Service
public class WineService {
	@Autowired
	private WineRepository wineRepository;
	
	@Autowired
	private ReviewRepository reviewRepository;
	
	@Autowired
	private WineLikeRepository wineLikeRepository;
	
	public WineDetailResponse wineGet(int userSeq, int wineSeq) {
		Wine wine = wineRepository.findById(wineSeq).orElse(null);
		boolean like_check = wineLikeRepository.existsByUserSeqAndWineSeq(userSeq, wineSeq);
		return new WineDetailResponse(wine.getWineSeq(), wine.getKname(), wine.getEname(), wine.getType(), wine.getCountry(), wine.getWinery(), wine.getGrapes(), wine.getAlcohol(), wine.getPrice(), wine.getBody(), wine.getTannin(), wine.getSweet(), wine.getAcidity(), wine.getImgPath(), wine.getFood(), wine.getLikeCnt(), wine.getReviewCnt(), wine.getScore(), like_check);
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

	public void wineLikeUpdate(int wineSeq) {
		wineRepository.updateLikeCount(wineSeq);
	}

	public void wineLike(WineLikeRequest request) {
		Likes like = request.toEntity();
		wineLikeRepository.save(like);
	}

	public void wineDislikeUpdate(int wineSeq) {
		wineRepository.updateDislikeCount(wineSeq);
		
	}

	public void wineDislike(int userSeq, int wineSeq) {
		wineLikeRepository.deleteByuserSeqAndwineSeq(userSeq, wineSeq);
	}

	public void wineReviewUpdate(int wineSeq) {
		wineRepository.updateReviewCount(wineSeq);
		
	}

	public void wineReviewDelete(int reviewSeq) {
		wineRepository.deleteReviewCount(reviewSeq);
		
	}

	public void reviewUpdate(int reviewSeq, double reviewScore, String reviewText) {
		Review review = reviewRepository.findById(reviewSeq).get();
		review.setReviewScore(reviewScore);
		review.setReviewText(reviewText);
		reviewRepository.save(review);
		
	}
}
