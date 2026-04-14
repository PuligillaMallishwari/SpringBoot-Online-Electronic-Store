                                Online Electronic Store (Full Stack Project)
                              
    
Project Overview :=
===========================
The Online Electronic Store is a full-stack web application designed to provide users with a seamless experience for browsing, searching, 
and purchasing electronic products online. The system includes user authentication, product management, shopping cart functionality, and order processing.
This project is developed using Java Full Stack technologies with a combination of backend, frontend, and database integration.

Aim of the Project:=
===========================
The main aim of this project is to develop a secure, scalable, and user-friendly e-commerce platform that allows customers to:
=>Browse electronic products online
=>View product details
=>Add products to cart
=>Place orders securely
=>Manage user accounts
=>Provide admin control for product management
This project demonstrates the implementation of real-world e-commerce functionalities using Full Stack Java technologies.

Technologies Used :=
==========================
🔹 Backend :
-----------------
Java (Core Java)
Spring Boot
Spring MVC
Spring Data JPA / Hibernate
RESTful APIs

🔹 Frontend :
-----------------
HTML5
CSS3
JavaScript
ReactJS

🔹 Database :
-----------------
Oracle Database 
🔹Tools:
Maven 
Postman
Browser Developer Tools (Frontend debugging)
🔹 Version Control :
Git
GitHub

System Architecture :=
===================================
The project follows a 3-tier architecture:
1. Presentation Layer (Frontend)
Built using HTML, CSS, JavaScript / ReactJS
Handles UI/UX and user interactions
2. Business Logic Layer (Backend)
Developed using Spring Boot & Spring MVC
Handles API requests, validation, and business logic
Implements RESTful services
3. Data Access Layer (Database)
Oracle / MySQL database
Stores user data, product details, orders, and transactions

Architecture Flow:==
=================================
User (Browser)
      ↓
Frontend (HTML/CSS/JS or React)
      ↓
REST API (Spring Boot Controller)
      ↓
Service Layer (Business Logic)
      ↓
Repository Layer (Spring Data JPA)
      ↓
Database (Oracle/MySQL)

  Project Structure :==
========================

🔹 Backend Structure (Spring Boot)
====================================

online-electronic-store/
│
├── src/main/java/com/project/
│   ├── controller/    # REST Controllers
│   ├── service/           # Business Logic
│   ├── repository/        # Database Access Layer
│   ├── entity/            # Model Classes
│   ├── dto/               # Data Transfer Objects
│   ├── config/            # Configuration Classes
│   └── OnlineStoreApplication.java
│
├── src/main/resources/
│   ├── application.properties
│   └── static/
│
└── pom.xml
🔹 Frontend Structure
=============================

frontend/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/             # Application pages (Home, Login, Product, Cart)
│   ├── services/          # API calls
│   ├── styles/            # CSS files
│   ├── App.js
│   └── index.js
│
└── package.json
🔑 Key Features
===========================
🔐 User Registration & Login
🛍️ Product Listing
🔍 Product Search & Filter
🛒 Shopping Cart System
💳 Order Placement
🧑‍💼 Admin Product Management
📦 Order Tracking
----------*How to Run the Project*-----------------------
Backend
============
mvn clean install
mvn spring-boot:run

Frontend
=========
npm install
npm start
