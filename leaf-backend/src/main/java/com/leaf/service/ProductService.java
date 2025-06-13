package com.leaf.service;


import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leaf.dto.ProductRequest;
import com.leaf.entity.Product;
import com.leaf.repository.OrderRepository;
import com.leaf.repository.ProductRepository;

import jakarta.transaction.Transactional;

import java.util.List;

@Service

public class ProductService {
	
	@Autowired
    private ProductRepository productRepository;
    
	@Autowired
    private OrderRepository orderRepository;  // instance, not class!

    public String addProduct(ProductRequest request, Long userId) {
        if (userId != 1L) return "Only admin can add products";

        Product product = new Product();
        product.setTitle(request.getTitle());
        product.setImageUrl(request.getImageUrl());
        product.setPrice(request.getPrice());

        productRepository.save(product);
        return "Product added successfully!";
    }
    
    
    public void deleteProduct(Long productId) {
        if (orderRepository.existsByProductId(productId)) {  // <-- instance method call
            throw new RuntimeException("Cannot delete product with existing orders.");
        }
        productRepository.deleteById(productId);
    }
    

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }
    
    public void deleteProductById(Long id) {
        productRepository.deleteById(id);
    }
}
