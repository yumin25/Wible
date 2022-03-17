package com.ssafy.wible.api.controller.wine;

import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.model.enums.Country;
import com.ssafy.wible.model.enums.Type;
import com.ssafy.wible.service.SearchService;
import io.swagger.annotations.Api;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = { "*" }, methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE} , maxAge = 6000)
@RestController
@RequestMapping("/search")
@Api("검색 컨트롤러")
public class SearchController {
    @Autowired
    private SearchService searchService;

    private static final String SUCCESS = "success";
    private static final String FAIL = "fail";

    @GetMapping("")
    public ResponseEntity<Page<Wine>> search(@RequestParam(value="start", defaultValue = "0") int start,
                                             @RequestParam(value="end", defaultValue = "100") int end,
                                             @RequestParam(value="body", defaultValue = "-1") int body,
                                             @RequestParam(value="tannin", defaultValue = "-1") int tannin,
                                             @RequestParam(value="sweet", defaultValue = "-1") int sweet,
                                             @RequestParam(value="acidity", defaultValue = "-1") int acidity,
                                             @RequestParam(value="type", required = false) String type,
                                             @RequestParam(value="country", required = false) String country,
                                             @PageableDefault(size = 10, sort = "likeCnt", direction = Sort.Direction.DESC) Pageable pageRequest
    ) throws Exception {

        Type t;
        if (type != null)  t = Type.valueOf(type.toUpperCase());
        else t = null;

        Country c;
        if (country != null)  c = Country.valueOf(country.toUpperCase());
        else c = null;
        //searchService.search(start, end, pageRequest);
        return new ResponseEntity<Page<Wine>>(searchService.search(start, end, t, body, tannin, sweet, acidity, c, pageRequest), HttpStatus.OK);
    }
}
