package com.leaf.controller;

import java.security.Principal;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.leaf.dto.OrderRequest;
import com.leaf.entity.Order;
import com.leaf.service.OrderService;

import lombok.Data;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")

public class OrderController {

	@Autowired
    private  OrderService orderService;

 

    @GetMapping("/user/{userId}")
    public List<Order> getOrdersByUserId(@PathVariable Long userId) {
        return orderService.getUserOrders(userId);
    }
    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/my")
    public List<Order> getMyOrders(Principal principal) {
        return orderService.getOrdersByUsername(principal.getName());
    }

    @PutMapping("/{orderId}/status")
    public Order updateStatus(@PathVariable Long orderId, @RequestBody Map<String, String> statusMap) {
        return orderService.updateOrderStatus(orderId, statusMap.get("status"));
    }

    @PostMapping
    public String placeOrder(@RequestBody OrderRequest orderRequest) {
        return orderService.placeOrder(orderRequest.getUserId(), orderRequest.getProductId());
    }
    
    @DeleteMapping("/{orderId}")
    public String deleteOrder(@PathVariable Long orderId) {
        orderService.deleteOrder(orderId);
        return "Order deleted successfully";
    }

}
