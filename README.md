# WorkSphere – Employee Management Dashboard

A full-stack style React application that allows admins to manage employees and assign tasks, while employees can track their tasks.

---

## 🚀 Features

### 👨‍💼 Admin Dashboard
- Assign tasks to employees
- View all employee assigned tasks

### 👩‍💻 Employee Dashboard
- View assigned tasks
- Update task status(later)
- Personalized dashboard after login
- Task categorization

### 🔐 Authentication System
- Login system for Admin & Employees
- Role-based access control
- Persistent login using Local Storage

### 📦 Data Management
- Context API (AuthContext) for global state management
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
emp/
│── public/
│   └── logo.png                     # Application logo / static public assets
│
│── src/
│   ├── assets/                     # Static files (images, icons, etc.)
│   │
│   ├── components/                 # Reusable UI components
│   │
│   │   ├── Auth/
│   │   │   └── Login.jsx           # Login form for Admin and Employee authentication
│   │
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx      # Admin dashboard to manage employees and tasks
│   │   │   └── EmployeeDashboard.jsx   # Employee dashboard to view and update tasks
│   │
│   │   ├── TaskList/
│   │   │   ├── AcceptTask.jsx      # Displays tasks accepted by employee
│   │   │   ├── CompletedTask.jsx   # Displays completed tasks
│   │   │   ├── FailedTask.jsx      # Displays failed/rejected tasks
│   │   │   ├── NewTask.jsx         # Displays newly assigned tasks
│   │   │   └── TaskList.jsx        # Combines and renders all task categories
│   │
│   │   ├── other/
│   │   │   ├── AllTask.jsx         # Shows all tasks in one list (Admin view)
│   │   │   ├── CreateTask.jsx      # Form to create and assign new tasks
│   │   │   ├── Header.jsx          # Navbar / top section UI
│   │   │   └── TaskListNumber.jsx  # Displays task statistics/counts
│   │
│   ├── context/
│   │   └── AuthProvider.jsx        # Global authentication & user state using Context API
│   │
│   ├── utils/
│   │   └── localStorage.jsx        # Helper functions for localStorage operations
│   │
│   ├── App.css                     # Global styling
│   ├── App.jsx                     # Main app logic and role-based rendering
│   ├── main.jsx                    # Entry point for React app
│   └── index.css                   # Base styles
│
│── .gitignore                      # Files/folders ignored by Git
│── .prettierrc                     # Code formatting rules
│── eslint.config.js                # Linting configuration
│── package.json                    # Project dependencies and scripts
│── vite.config.js                  # Vite build configuration
│── README.md                       # Project documentation
```

---
## 🌐 Live Demo

Check out the live project here:

🔗 **Live Demo:** [https://your-live-demo-link.com](https://work-sphere-pink.vercel.app/)

---

### Demo Access

#### Admin Login
- Email: admin@me.com
- Password: 123

#### Employee Login
- Name: Arjun
- Email: e@e.com
- Password: 123

- Name: Sneha
- Email: e2@e.com
- Password: 123

---

## ⚙️ How to Run the Project

```bash
git clone https://github.com/Nickysinghal/WorkSphere.git
cd emp
npm install
npm run dev
```
---
## 📄 License

This project is for educational and learning purposes.
