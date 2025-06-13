package com.leaf.dto;



import lombok.Data;

@Data
public  class OrderRequest {
    private Long userId;
    private Long productId;
}