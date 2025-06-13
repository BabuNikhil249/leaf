package com.leaf.repository;

import com.leaf.entity.Order;
import com.leaf.entity.User;

import jakarta.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findByUser(User user);
    
    @Transactional
    void deleteByProductId(Long productId);
    
    boolean existsByProductId(Long productId);
}
