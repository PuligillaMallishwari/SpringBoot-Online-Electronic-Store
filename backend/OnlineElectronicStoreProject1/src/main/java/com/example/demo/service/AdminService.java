package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Admin;
import com.example.demo.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	private AdminRepository repo;

	public boolean login(String username, String password) {
		Admin admin = repo.findByUsername(username);

		return admin != null && admin.getPassword().equals(password);
	}

	public String register(Admin admin) {
		repo.save(admin);
		return "Registered the admin Successfully";
	}

	public List<Admin> getAllAdmins() {
		return repo.findAll();
	}

	public void deleteAdmin(String username) {
		repo.deleteById(username);
	}

	public void updateAdmin(Admin admin) {
		repo.save(admin);
	}
}
