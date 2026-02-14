# Notes Board

A full-stack notes application built with React and Express.  
This project allows users to create, update, delete, and manage notes through a RESTful API connected to MongoDB.

---

## 🚀 Features

- User authentication (JWT)
- Password hashing with bcrypt
- Create, read, update, and delete notes
- Protected routes
- RESTful API architecture
- Environment-based configuration

---

## 🛠 Tech Stack

- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)
- **Security:** bcrypt

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory after you clone the repo and cd into it:

```bash
cp .env.example .env
```

Update your `.env` file:

```env
PORT=3005
DB_URI=mongodb://localhost:27017/notesdb
JWT_SECRET=your_super_secret_key
```

Make sure your MongoDB server is running before starting the application.

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/notes-board.git
cd notes-board
```

Install backend dependencies and then run the api:

```bash
npm install
npm run dev
```

Install frontend dependencies and then run the vite developement server:

```bash
cd web
npm install
npm run dev
```
---

## 📁 Project Structure

```
notes-board/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── config/
├── web/ <--- the frontend app written in react
│
├── .env
├── .env.example
├── index.js
├── package.json
└── README.md
```

---

## 🔐 API Overview

| Method | Endpoint              | Description                      |
|--------|----------------------|----------------------------------|
| POST   | /api/auth/register   | Register new user                |
| POST   | /api/auth/login      | Login user                       |
| GET    | /api/notes           | Get user notes (protected)       |
| POST   | /api/notes           | Create new note (protected)      |
| PUT    | /api/notes/:id       | Update note (protected)          |
| DELETE | /api/notes/:id       | Delete note (protected)          |

---

## 🧪 Example .env.example File

```env
PORT=3005
DB_URI=mongodb://localhost:27017/yourDb
JWT_SECRET=your_super_secret_key
```

---

## 🤝 Contributing

Pull requests are welcome.  
For major changes, please open an issue first to discuss what you would like to change.

Please ensure tests are updated as appropriate.
