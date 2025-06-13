package com.leaf.dto;

import lombok.Data;

@Data
public class ProductRequest {
    private String title;
    private String imageUrl;
    private Double price;
}
