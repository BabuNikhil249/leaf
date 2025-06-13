package com.leaf.controller;



import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.leaf.dto.ProductRequest;
import com.leaf.entity.Product;
import com.leaf.service.ProductService;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:3000")

public class ProductController {
	
	@Autowired
    private ProductService productService;

    @PostMapping("/add/{userId}")
    public String addProduct(@RequestBody ProductRequest request, @PathVariable Long userId) {
        return productService.addProduct(request, userId);
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
    
   

@DeleteMapping("/{id}")
public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
    try {
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully");
    } catch (RuntimeException e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }
}

}
