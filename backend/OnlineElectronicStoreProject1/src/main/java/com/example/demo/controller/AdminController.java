package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.entity.Admin;
import com.example.demo.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {

	@Autowired
	private AdminService service;

	// 🔐 LOGIN
	@GetMapping("/login")
	public boolean login(@RequestParam String username, @RequestParam String password) {
		return service.login(username, password);
	}

	// 📝 REGISTER
	@PostMapping("/register")
	public String register(@RequestBody Admin admin) {
		return service.register(admin);
	}

	// 📄 GET ALL ADMINS
	@GetMapping("/all")
	public List<Admin> getAllAdmins() {
		return service.getAllAdmins();
	}

	// ❌ DELETE ADMIN
	@DeleteMapping("/delete")
	public String deleteAdmin(@RequestParam String username) {
		service.deleteAdmin(username);
		return "Admin deleted successfully";
	}

	// ✏️ UPDATE ADMIN
	@PutMapping("/update")
	public String updateAdmin(@RequestBody Admin admin) {
		service.updateAdmin(admin);
		return "Admin updated successfully";
	}
}
