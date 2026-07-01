import React from 'react'
import jenil from '../assets/IRNH7652.JPG'
import "./User.css";


function User() {
  return (
    <div>
       <img src={jenil} alt="User Profile" />
      <h1> Welcome to User-Profile </h1>
      
      <h2>Jenil Gajjar</h2>
      <p>Full Stack Developer</p>
      <h3>About</h3>
      <p>We are passionate Full Stack Developers dedicated to building modern, responsive, and user-friendly web applications. We specialize in both front-end and back-end development, creating complete solutions that are efficient, scalable, and secure.
        Our goal is to help businesses and individuals turn their ideas into successful digital products by providing reliable, innovative, and cost-effective web development solutions.
      </p>
      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Python</li>
        <li>C++</li>
        <li>C</li>
        <li>SQL</li>
      </ul>
      <h3>Projects</h3>
      <h4>E-Commerce Backend Developer (Python & Django)</h4>
      <p>
        Developed a secure and scalable E-Commerce backend application using Python and the Django framework. The project provides RESTful APIs to manage products, categories, customers, orders, and payments while ensuring efficient database management and secure authentication.

        Implemented key backend features such as user registration and login, product catalog management, shopping cart functionality, order processing, and admin dashboard operations. Used Django ORM for database interactions and integrated authentication and authorization to protect user data.
      </p>
      <h4>Key Features:</h4>
     <ul>
        <li>User Registration and Authentication</li>
        <li>Product Catalog Management</li>
        <li>Shopping Cart and Order Processing</li>
        <li>Admin Dashboard for Product and Order Management</li>
        <li>Secure Payment Integration</li>
        <li>RESTful API Endpoints for Frontend Consumption</li>
        <li>Database Management with Django ORM</li>
        <li>Error Handling & Data Validation</li>
        <li>Secure Authentication and Authorization</li>

     </ul>

     <h4>Technologies Used:</h4>
     <ul>
        <li>Python</li>
        <li>Django</li>
        <li>Django REST Framework</li>
        <li>SQLite/PostgreSQL</li>
        <li>HTML, CSS, JavaScript (Frontend Integration)</li>
     </ul>

     <h4>Contact</h4>
     <p>Email: jenil.gajjar@example.com</p>
     <p>Phone: +1 (123) 456-7890</p>
        </div>
  )
}

export default User
