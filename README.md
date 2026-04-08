# WorkSphere – Employee Management Dashboard

A full-stack style React application that allows admins to manage employees and assign tasks, while employees can track and update their tasks.

---

## 🚀 Features

### 👨‍💼 Admin Dashboard
- Add and manage employees
- Assign tasks to employees
- View all employee data
- Separate admin authentication

### 👩‍💻 Employee Dashboard
- View assigned tasks
- Update task status
- Personalized dashboard after login

### 🔐 Authentication System
- Login system for Admin & Employees
- Role-based access control
- Persistent login using Local Storage

### 📦 Data Management
- Context API for global state management
- Separate contexts for:
  - Auth
  - Tasks
- Data stored in Local Storage

### 🔄 Additional Features
- Logout functionality
- Dynamic UI updates
- Clean component structure

---

## 🛠️ Tech Stack

- React.js
- Context API
- JavaScript (ES6+)
- HTML5
- CSS3
- Local Storage

---

## 📂 Project Structure

```
taskhive/
│
├── public/
│   └── index.html
│
├── src/
│   ├── assets/          # Images, icons, etc.
│   ├── components/      # Reusable UI components
│   ├── pages/           # Admin & Employee pages
│   ├── context/         # Context API (Auth, Tasks)
│   ├── utils/           # Helper functions / data
│   ├── App.js           # Main app component
│   └── index.js         # Entry point
│
├── package.json
└── README.md
```



---

## ⚙️ How to Run the Project

```bash
git clone https://github.com/Nickysinghal/WorkSphere.git
cd emp
npm install
npm run dev
