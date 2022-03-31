package com.ssafy.wible.service;

import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.model.response.wine.SearchWineResponse;
import com.ssafy.wible.repository.WineRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class FoodService {
    @Autowired
    private WineRepository wineRepository;

    public Page<SearchWineResponse> searchWine(String food, Pageable pageRequest) {
        Page<Wine> wines = null;
        if (food.equals("")){
            wines = wineRepository.findAll(pageRequest);
        }
        else {
            wines = wineRepository.findWinesByFoodContains(food, pageRequest);
        }

        Page<SearchWineResponse> result = wines.map(
                post -> new SearchWineResponse(post.getWineSeq(), post.getKname(), post.getEname(), post.getType(), post.getCountry(), post.getGrapes(), post.getPrice(), post.getImgPath(), post.getScore()));
        return result;
    }
}
