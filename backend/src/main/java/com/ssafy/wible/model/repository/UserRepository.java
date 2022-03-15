package com.ssafy.wible.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.wible.model.entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{

}
