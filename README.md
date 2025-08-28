# SauceDemo Cypress Test Suite

This repository contains **end-to-end UI tests** for [SauceDemo](https://www.saucedemo.com/) using **Cypress**.  
The tests cover **login, products/cart functionality, and checkout flows**, including both positive and negative scenarios.

---

## 🧪 Features Tested

### Login
- ✅ Login with valid credentials  
- ❌ Error on invalid credentials  
- ❌ Error when fields are empty  

### Products & Cart
- ✅ Verify all products are displayed  
- ✅ Add a single product to the cart  
- ✅ Remove a product from the cart  
- ✅ Add multiple products and verify cart badge  

### Checkout
- ✅ Complete checkout successfully with valid information  
- ❌ Negative checkout: missing required fields (e.g., first name)  
- ❌ Additional negative cases possible: missing last name, missing postal code  

---

## ⚡ Getting Started

### Prerequisites
- Node.js installed  
- npm or yarn  

### Install Cypress
```bash
npm install cypress --save-dev

npx cypress open

npx cypress run


✅ Author

Yasser Saad 
