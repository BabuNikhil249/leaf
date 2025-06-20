package com.leaf.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.leaf.entity.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
    boolean existsByPhone(String phone);
    User findByEmailAndPassword(String email, String password);
}