package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Orders;
import com.example.demo.entity.Product;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.ProductRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepo;

    @Autowired
    private ProductRepository productRepo;

    public ResponseEntity<String> placeOrder(Orders order) {
        try {

            Product product = productRepo.findById(order.getProductId()).orElse(null);

            if (product == null) {
                return  ResponseEntity.ok("Product Not Found");
            }

            if (product.getQuantity() < order.getQuantity()) {
                return  ResponseEntity.ok("Insufficient Stock");
            }

            // Reduce stock
            product.setQuantity(product.getQuantity() - order.getQuantity());
            productRepo.save(product);

            // Calculate total Price
            order.setTotalPrice(product.getPrice() * order.getQuantity());

            orderRepo.save(order);

            return ResponseEntity.ok("Buy the Product Successfully");
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.ok( e.getMessage());   // 🔥 IMPORTANT
        }
    }
}