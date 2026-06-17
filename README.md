# 🛒 E-Commerce Platform (MERN Stack)

A comprehensive, full-stack e-commerce application developed to streamline online shopping. This platform features a seamless user interface for customers and a robust administrative panel for inventory and order management.

## 🌟 Project Overview

This project was developed as a key component of my Full-Stack Web Development internship. The application follows a modular architecture, separating the client, admin, and server logic to ensure scalability and maintainability.

## 🚀 Core Features

### For Customers

* **Authentication**: Secure user registration and login functionality.
* **Intuitive Browsing**: Categorized product discovery (Men, Women, Kids) with detailed product views.
* **Cart & Checkout**: Full-featured shopping cart management and streamlined order placement.
* **Tracking**: Users can view their order history and track the status of current orders.

### For Administrators

* **Dashboard**: A centralized management hub.
* **Inventory Control**: Full CRUD (Create, Read, Update, Delete) capabilities for product management, including image handling.
* **Order Management**: Tools to monitor and manage incoming customer orders.

## 🛠️ Technical Stack

* **Frontend**: React.js, React Router, Axios, CSS3.
* **Backend**: Node.js, Express.js.
* **Database**: MongoDB (managed via MongoDB Compass).

## 📂 Project Architecture

The project is structured for clean separation of concerns:

* `/client`: Customer-facing frontend application.
* `/admin`: Dedicated administrative panel.
* `/server`: RESTful API backend handling business logic and database interactions.
* `/upload`: Local storage directory for product assets.

## ⚙️ Deployment & Setup

1. **Environment Configuration**: Create a `.env` file in the `/server` directory with the following keys: `PORT`, `MONGODB_URI`, and `JWT_SECRET`.
2. **Database**: Ensure a local instance of MongoDB is running.
3. **Initialization**:
* Install dependencies in the `server`, `client`, and `admin` directories using `npm install`.
* Start services concurrently using `npm run dev` in the backend and `npm start` in the respective frontend folders.



## 🔮 Roadmap

* Integration of secure third-party payment gateways (Stripe/PayPal).
* Implementation of user-generated reviews and ratings system.
* Development of a "Wishlist" feature for saved products.
* Automated email notification system for order confirmations.
