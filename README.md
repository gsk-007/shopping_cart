# 🛒 Shopping Cart Application  

A user-friendly shopping cart application designed to streamline the online shopping experience. Easily browse products, add items to your cart, and manage your purchases efficiently.  

## 🚀 Why This Project Exists  

E-commerce platforms often struggle with intuitive and responsive cart management. This project was built to:  

- Simplify the online shopping experience with a seamless cart interface.  
- Provide a foundation for developers to build and expand upon an e-commerce system.  
- Implement efficient state management for adding, removing, and updating cart items.  
- Enhance user engagement with a smooth and interactive UI.  

## 🎯 Features  

✅ **Product Browsing** – View a list of available products.  
✅ **Cart Management** – Add or remove products from your shopping cart.  
✅ **Dynamic Quantity Control** – Adjust the number of items per product.  
✅ **Total Price Calculation** – Automatically update the total cost.  
✅ **Responsive Design** – Works on desktop and mobile devices.  

## 🛠️ Technologies Used  

- **Frontend:** JavaScript (React, Vue, or other frameworks – specify if applicable)  
- **Backend:** Node.js / Express.js (or specify other backend frameworks)  
- **Database:** MongoDB, PostgreSQL, or Firebase (if applicable)  

## 📦 Installation  

1️⃣ **Clone the Repository**  
```bash
git clone https://github.com/gsk-007/shopping_cart.git
cd shopping_cart
```  

2️⃣ **Install Dependencies**  
```bash
npm install
```  

3️⃣ **Set Up Environment Variables**  
Rename `.env.example` to `.env` and configure the necessary variables.  

## 🚀 Available NPM Scripts  

The following npm scripts are available to run the project efficiently:  

- **Start the Backend Server**  
  ```bash
  npm run start
  ```
  Runs the backend server using Node.js.  

- **Run the Backend Server with Nodemon** (for development)  
  ```bash
  npm run server
  ```
  Uses **nodemon** to automatically restart the server on changes.  

- **Start the Frontend Application**  
  ```bash
  npm run client
  ```
  Runs the frontend using npm inside the `frontend` directory.  

- **Run Both Frontend & Backend Concurrently** (for development)  
  ```bash
  npm run dev
  ```
  Uses **concurrently** to run both frontend and backend simultaneously.  

- **Import Sample Data**  
  ```bash
  npm run data:import
  ```
  Runs `backend/seeder.js` to populate the database with sample data.  

- **Destroy Sample Data**  
  ```bash
  npm run data:destroy
  ```
  Runs `backend/seeder.js -d` to remove all data from the database.  

## 🎮 Usage  

1. Open the application and browse products.  
2. Click "Add to Cart" to add items.  
3. Adjust item quantities as needed.  
4. View the total price and proceed to checkout.  

## 🤝 Contributing  

Contributions are welcome! To contribute:  

- **Fork** the repository  
- **Create a new branch** (`feature-branch-name`)  
- **Commit your changes**  
- **Open a Pull Request**  
