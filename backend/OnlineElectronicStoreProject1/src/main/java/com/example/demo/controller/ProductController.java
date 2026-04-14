package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Product;
import com.example.demo.service.ProductService;

@RestController

@CrossOrigin(origins = "*")
@RequestMapping("/product")
public class ProductController {
	@Autowired
	private ProductService service;

	@PostMapping("/add")
	public String addProduct(@RequestBody Product product) {
		return service.addProduct(product);
	}

	@GetMapping("/all")
	public List<Product> getAllProducts() {
		return service.getAllProducts();
	}

	@GetMapping("/id/{id}")
	public Product getProduct(@PathVariable Long id) {
		return service.getProduct(id);
	}

	@DeleteMapping("/delete/{id}")
	public String deleteProduct(@PathVariable Long id) {
		service.deleteProduct(id);
		return "Deleted Successfully";
	}

	@PutMapping("/update")
	public String updateProduct(@RequestBody Product product) {
	    service.updateProduct(product);
	    return "Product Updated Successfully";
	}
}
