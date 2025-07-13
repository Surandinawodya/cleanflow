# 🧼 CleanFlow – Cleaning Service Management System

CleanFlow is a full-stack web application for booking and managing cleaning services. Users can register, log in, book services like Deep Cleaning or Carpet Cleaning, and manage bookings through a personalized dashboard. The system uses token-based authentication to ensure secure access.

---

## 🚀 Features
- 🔐 JWT-based login & signup
- 📅 Book cleaning services
- ✏️ Edit or cancel bookings
- 📋 Dashboard to manage bookings
- 🧠 Protected API routes

---

## 🛠️ Tech Stack

**Frontend:** React.js, React Router, Tailwind CSS, Axios  
**Backend:** Node.js, Express.js, MongoDB, JWT, Mongoose

---

## 📦 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Surandinawodya/cleanflow.git
cd cleanflow

### 2. Backend Setup
```bash
cd backend
npm install

Create .env file in /backend:
PORT=5000
MONGO_URI=mongodb://localhost:27017/cleaningdb
JWT_SECRET=yourSecretKey

Start the backend:
```bash
cd backend
node server.js
---

###3. Frontend Setup
```bash
npm install
npm start

---
🔐 API Endpoints
Method	 Endpoint	        Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	        Login and get JWT token
GET	/api/bookings	        Get user's bookings
POST	/api/bookings/add	Create a new booking
PUT	/api/bookings/:id	Edit a booking
DELETE	/api/bookings/:id	Cancel a booking

---
📂 Folder Structure
cleanflow/
├── backend/
│   ├── models/      # Mongoose models
│   ├── routes/      # Booking & Auth, contact routes
│   ├── middleware/  # JWT middleware
│   └── server.js
|
│   ├── src/
│   │   ├── pages/       # Login, Register, BookingForm,Dashboard, Homepage
│   │   ├── components/  # Header, Footer, Myprofile, AboutPage, ContactUs
│   │   └── App.js
└── README.md

👨‍💻 Author
Neth – BSc (Hons) in Software Engineering
GitHub: @surandinawodya
