# 🌿 Leaf - Online Plant Nursery

Leaf is a full-stack web application for an online plant nursery. Customers can browse plant products, search, add to cart, and place orders. Admins can manage the product list with features to add, delete, and update products. Built using React.js for the frontend and Spring Boot with MySQL for the backend.

---

## 🚀 Tech Stack

### 🌐 Frontend
- React.js
- Axios (for API requests)
- HTML5, CSS3, JavaScript

### 🔧 Backend
- Java 17
- Spring Boot 3.4.4
- Spring Data JPA
- RESTful APIs
- MySQL Database

---

## 📦 Features

### 👤 User Features
- View all plant products
- Search plants by name
- Add products to cart
- Increase/decrease quantity
- Place orders
- User signup and login

### 🔐 Admin Features
- View all products
- Add new products
- Delete products (restricted if product has orders)
- Update product details

---

## 📁 Project Structure

### Backend (Spring Boot)

com.leaf
├── controller # REST controllers for user, product, order  <br/>
├── dto # Data transfer objects (UserDTO, ProductDTO) <br/>
├── model # Entity classes (User, Product, Order) <br/>
├── repository # Spring JPA repositories <br/>
├── service # Business logic implementation <br/>
├── util # Utility classes (response maps) <br/>
└── LeafApplication.java


### Frontend (React)

src/
├── components/
│ ├── Product.js # Show product list
│ ├── Cart.js # Cart and order placement
│ ├── AdminProducts.js # Admin product management
│ └── Auth/
│ ├── Login.js
│ └── Signup.js
├── App.js # Routing and layout
└── index.js


---

## 🛠️ Setup Instructions

### ✅ Prerequisites
- Node.js & npm
- Java 17+
- Maven
- MySQL Server

---

### 🖥️ Backend Setup (Spring Boot)

1. **Clone the backend repository**
   ```bash
   git clone https://github.com/your-username/leaf-backend.git
   cd leaf-backend
2. **Configure MySQL in application.properties**
   ```bash
    spring.datasource.url=jdbc:mysql://localhost:3306/leaf
    spring.datasource.username=root
    spring.datasource.password=yourpassword
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
3. **Run the backend**
   ```bash
   ./mvnw spring-boot:run
   The backend will start on: http://localhost:8080

   ---

### 🖥️ Frontend Setup (Reactjs)

1. **Clone the frontend repository**
```bash
git clone https://github.com/your-username/leaf-frontend.git
cd leaf-frontend
npm install
npm start









