package com.leaf.controller;

import com.leaf.dto.LoginRequest;
import com.leaf.dto.SignupRequest;
import com.leaf.entity.User;
import com.leaf.service.UserService;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")

public class UserController {
	
	@Autowired
    private UserService userService;

    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request) {
        return userService.signup(request);
    }

    
    
    @PostMapping("/check")
    public ResponseEntity<Map<String, Boolean>> checkUserExists(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        String phone = payload.get("phone");
        boolean exists = userService.existsByEmailOrPhone(email, phone);
        return ResponseEntity.ok(Map.of("exists", exists));
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {
        User user = userService.findByEmailAndPassword(request.getEmail(), request.getPassword());
        if (user != null) {
            Map<String, Object> response = new HashMap<>();
            response.put("id", user.getId()); 
            response.put("username", user.getFirstName()); // or full name
            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
        }
    }

}