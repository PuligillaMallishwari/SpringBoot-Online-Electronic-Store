package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Product;
import com.example.demo.repository.ProductRepository;
@Service
public class ProductService {
	@Autowired
	private ProductRepository repo;

	public String addProduct(Product product) {
		repo.save(product);
		return "Product Added Successfully";
	}

	public List<Product> getAllProducts() {
		return repo.findAll();
	}

	public Product getProduct(Long id) {
		return repo.findById(id).orElse(null);
	}

	public String deleteProduct(Long id) {
		repo.deleteById(id);
		return "Product deleted Successfully";
	}
	public String updateProduct(Product product) {
	    repo.save(product);   // MUST be present
	    return "Product Updated Successfully";
	}
}
