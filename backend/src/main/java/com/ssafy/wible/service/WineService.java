package com.ssafy.wible.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.repository.WineRepository;

@Service
public class WineService {
	@Autowired
	private WineRepository wineRepository;
	
	public Wine wineGet(int wineSeq) {
		return wineRepository.findById(wineSeq).orElse(null);
	}
}
