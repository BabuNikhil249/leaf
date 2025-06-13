package com.leaf.service;


import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.leaf.dto.LoginRequest;
import com.leaf.dto.SignupRequest;
import com.leaf.entity.User;
import com.leaf.repository.UserRepository;

import java.util.Optional;

@Service

public class UserService {
	
	@Autowired
    private UserRepository userRepository;

    public String signup(SignupRequest request) {
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return "Password and Confirm Password do not match";
        }

        User user = new User();
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());
        user.setPhone(request.getPhone());
        user.setPlace(request.getPlace());

        userRepository.save(user);
        return "Signup successful! Please login.";
    }

    public String login(LoginRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());
        if (userOpt.isEmpty()) return "User not found";

        User user = userOpt.get();
        if (!request.getPassword().equals(user.getPassword())) {
            return "Incorrect password";
        }

        return "Login successful! Welcome, " + user.getFirstName() + ", ID: " + user.getId();
    }
    
    public boolean existsByEmailOrPhone(String email, String phone) {
        return userRepository.existsByEmail(email) || userRepository.existsByPhone(phone);
    }
    
    public User findByEmailAndPassword(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }

}