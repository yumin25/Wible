package com.ssafy.wible.repository;

import com.ssafy.wible.model.entity.Wine;
import com.ssafy.wible.model.enums.Country;
import com.ssafy.wible.model.enums.Type;
import org.springframework.data.jpa.domain.Specification;

public class WineSpecification {
    public static Specification<Wine> equalsType(Type type){
        return (((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("type"), type)));
    }

    public static Specification<Wine> equalsCountry(Country country){
        return (((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("country"), country)));
    }

    public static Specification<Wine> betweenPrice(int start, int end){
        return (((root, query, criteriaBuilder) -> criteriaBuilder.between(root.get("price"), start, end)));
    }

    public static Specification<Wine> equalsBody(int body){
        return (((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("body"), body)));
    }

    public static Specification<Wine> equalsTannin(int tannin){
        return (((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("tannin"), tannin)));
    }

    public static Specification<Wine> equalsAcidity(int acidity){
        return (((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("acidity"), acidity)));
    }

    public static Specification<Wine> equalsSweet(int sweet){
        return (((root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("sweet"), sweet)));
    }
}
