package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Customer;
import com.example.demo.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	private CustomerRepository repo;

	public String register(Customer customer) {
		System.out.println(customer.getName());
		System.out.println(customer.getEmail());
		System.out.println(customer.getPassword());

		repo.save(customer);
		return "Customer Registered Successfully";
	}

	public Customer login(String email, String password) {
	    Customer c = repo.findByEmail(email);

	    if (c != null && c.getPassword().equals(password)) {
	        return c; // ✅ return full object
	    }
	    return null;
	}
	public List<Customer> getAllCustomers() {
		return repo.findAll();
	}
}