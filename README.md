<div align="center">

# 📚 Bookstore Auth MERN

### A Modern Full-Stack Application Built with MERN Stack & Auth

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF4154?logo=react&logoColor=white)](https://react-hot-toast.com/)
[![React Icons](https://img.shields.io/badge/React_Icons-E91E63?logo=react&logoColor=white)](https://react-icons.github.io/react-icons/)

[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?logo=mongoose&logoColor=white)](https://mongoosejs.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)
[![Bcrypt](https://img.shields.io/badge/Bcrypt-3178C6?logo=letsencrypt&logoColor=white)](https://www.npmjs.com/package/bcryptjs)
[![CORS](https://img.shields.io/badge/CORS-FF6C37?logo=cors&logoColor=white)](https://www.npmjs.com/package/cors)
[![Dotenv](https://img.shields.io/badge/Dotenv-ECD53F?logo=dotenv&logoColor=black)](https://www.npmjs.com/package/dotenv)
[![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?logo=nodemon&logoColor=white)](https://nodemon.io/)

</div>

---

## 📖 About The Project

A comprehensive Book Management System built with the MERN stack that allows users to manage their book inventory with full CRUD operations. The application features secure JWT-based authentication, a modern responsive UI built with Tailwind CSS, and real-time notifications for enhanced user experience.

### Built With Modern Technologies

This project leverages the latest versions of industry-standard tools and frameworks:

**Frontend:** React • Vite • Tailwind CSS • React Router DOM  • Axios • React Hot Toast • React Icons

**Backend:** Node.js • Express.js • Dotenv • Mongoose • JWT • Bcrypt.js • CORS • Nodemon

---

## ⚡ Quick Start

```bash
# Clone the repository
git clone https://github.com/satyabrata860/Bookstore-Auth-MERN.git

# Install server dependencies
cd Bookstore-Auth-MERN/server
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret

# Start the server
npm start

# In a new terminal, install client dependencies
cd ../client
npm install

# Set up frontend environment
cp .env.example .env
# Edit .env with your backend URL

# Start the client
npm run dev
```

Visit `http://localhost:5173` and start managing your books! 🚀

---

## 🏗️ Application Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         CLIENT SIDE                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │
│  │   Login/     │  │     Home     │  │  Protected   │       │
│  │   Signup     │→ │  Dashboard   │  │    Route     │       │
│  └──────────────┘  └──────────────┘  └──────────────┘       │
│                           ↓                                 │
│                  ┌─────────────────┐                        │
│                  │  Axios Instance │                        │
│                  │  (with JWT)     │                        │
│                  └─────────────────┘                        │
└────────────────────────────┼────────────────────────────────┘
                             │ HTTP Requests
                             ↓
┌─────────────────────────────────────────────────────────────┐
│                        SERVER SIDE                          │
│  ┌──────────────────────────────────────────────────────┐   │
│  │              Express.js Application                  │   │
│  │  ┌────────────┐         ┌────────────────┐           │   │
│  │  │   CORS     │         │     JWT        │           │   │
│  │  │ Middleware │         │ Auth Middleware│           │   │
│  │  └────────────┘         └────────────────┘           │   │
│  └──────────────────────────────────────────────────────┘   │
│                             ↓                               │
│  ┌─────────────────┐  ┌─────────────────┐                   │
│  │  User Routes    │  │   Book Routes   │                   │
│  │  /user/create   │  │  /book/addbook  │                   │
│  │  /user/login    │  │ /book/booklists │                   │
│  └─────────────────┘  │/book/updatebook │                   │
│         ↓             │/book/deletebook │                   │
│  ┌─────────────────┐  └─────────────────┘                   │
│  │  Controllers    │           ↓                            │
│  │  - User Auth    │  ┌─────────────────┐                   │
│  │  - Book CRUD    │  │   Controllers   │                   │
│  └─────────────────┘  └─────────────────┘                   │
│         ↓                      ↓                            │
│  ┌─────────────────────────────────────┐                    │
│  │         Mongoose Models             │                    │
│  │  ┌──────────┐    ┌──────────┐       │                    │
│  │  │   User   │    │   Book   │       │                    │
│  │  └──────────┘    └──────────┘       │                    │
│  └─────────────────────────────────────┘                    │
└────────────────────────────┼────────────────────────────────┘
                             ↓
                    ┌─────────────────┐
                    │   MongoDB       │
                    │   Database      │
                    │  "bookstore"    │
                    └─────────────────┘
```

---

## 🌟 Features

✨ **Complete CRUD Operations**
🔐 **Secure Authentication**
📚 **Book Management**
⚡ **Fast Development**
🎨 **Modern UI**
📱 **Responsive Design**
🔄 **Real-time Feedback**
🛡️ **Protected Routes**
🚀 **Production Ready**
📊 **Data Table View**
🎯 **Form Validation**

---

## 🎯 Key Functionalities

### User Authentication
- **Sign Up**: Create a new account with first name, last name, email, and password
- **Login**: Secure login with JWT token generation
- **Protected Routes**: Automatic redirection to login for unauthorized access

### Book Management Dashboard
- **Add Books**: Create new book entries with the following fields:
  - Book Name
  - Book Title
  - Author
  - Selling Price
  - Publish Date
- **View Books**: Display all books in an organized table format
- **Update Books**: Edit existing book information inline
- **Delete Books**: Remove books from the inventory with confirmation

---

## 🛠️ Technologies Used

### Frontend
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

**Additional Libraries:**
- **React Hot Toast** - Beautiful toast notifications
- **React Icons** - Popular icon library (Material Design, Font Awesome icons)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)

**Additional Libraries:**
- **Bcrypt.js** - Secure password hashing
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment variable management

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** or **yarn** - Comes with Node.js
- **MongoDB** - Local Installation or MongoDB Atlas

---

## 📁 Project Structure

```
Bookstore-Auth-MERN/
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── App.css
│   │   ├── App.jsx         # Main App component
│   │   ├── index.css
│   │   └── main.jsx        # Entry point
│   ├── axiosInstance.js    # Axios configuration
│   ├── .env.example
│   ├── index.html
│   ├── package.json
│   ├── vercel.json
│   └── vite.config.js
│
├── server/                  # Backend Node.js application
│   ├── config/
│   │   └── database.js     # MongoDB connection
│   ├── controller/
│   │   ├── book.controller.js
│   │   └── user.controller.js
│   ├── middleware/
│   │   └── auth.middleware.js  # JWT authentication
│   ├── model/
│   │   ├── book.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── book.routes.js
│   │   └── user.routes.js
│   ├── .env.example
│   ├── .gitignore
│   ├── index.js            # Server entry point
│   └── package.json
│
└── README.md
```

---

## 🔌 API Documentation

### Base URL
```
http://localhost:3000
```

### Authentication Endpoints

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/user/create` | Register a new user | No |
| POST | `/user/login` | Login user and receive JWT token | Yes |

**Register User - Request Body:**
```json
{
  "FirstName": "John",
  "LastName": "Doe",
  "Email": "john@example.com",
  "Password": "securepassword123"
}
```

**Login User - Request Body:**
```json
{
  "Email": "john@example.com",
  "Password": "securepassword123"
}
```

**Login Response:**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Login successful"
}
```

### Book Endpoints (Protected Routes)

All book endpoints require JWT authentication via Bearer token in the Authorization header.

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/book/addbook` | Create a new book | Yes |
| GET | `/book/booklists` | Get all books | Yes |
| POST | `/book/deletebook` | Delete a book by ID | Yes |
| PUT | `/book/updatebook` | Update book details | Yes |

**Add Book - Request Body:**
```json
{
  "BookName": "The Great Gatsby",
  "BookTitle": "A Classic Novel",
  "Author": "F. Scott Fitzgerald",
  "SellingPrice": "15.99",
  "PublishDate": "1925-04-10"
}
```

**Update Book - Request Body:**
```json
{
  "Id": "book_id_here",
  "BookName": "Updated Book Name",
  "BookTitle": "Updated Title",
  "Author": "Updated Author",
  "SellingPrice": "19.99",
  "PublishDate": "2025-01-01"
}
```

**Delete Book - Request Body:**
```json
{
  "Id": "book_id_here"
}
```

**Authorization Header Format:**
```
Authorization: Bearer <your_jwt_token>
```

---

## 👨‍💻 Author

<div align="center">

### Satyabrata Pradhan

**Full Stack Developer** | MERN Stack Specialist

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/spradhan860/)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white)](https://satyaa1.vercel.app/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:spradhan860@gmail.com)

</div>

---

## ⭐ Show Your Support

Give a ⭐️ if this project helped you or if you find it interesting!
---

<div align="center">

**Made with ❤️ using the MERN Stack**

**© 2026 Satyabrata. All rights reserved.**

</div>
