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
src/
│
├── assets/                 # Static files (images, icons, etc.)
│
├── components/            # Reusable UI components
│   │
│   ├── Auth/
│   │   └── Login.jsx              # Login form for users (Admin/Employee)
│   │
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx     # Admin panel (create/manage tasks)
│   │   └── EmployeeDashboard.jsx  # Employee panel (view & update tasks)
│   │
│   ├── other/
│   │   ├── AllTask.jsx            # Displays all tasks (main list view)
│   │   ├── CreateTask.jsx         # Form to create new tasks (Admin)
│   │   ├── Header.jsx             # Navbar / top section UI
│   │   └── TaskListNumber.jsx     # Shows task counts (stats)
│   │
│   ├── TaskList/
│   │   ├── AcceptTask.jsx         # Tasks accepted by employee
│   │   ├── Completedtask.jsx      # Completed tasks UI
│   │   ├── FailedTask.jsx         # Failed tasks UI
│   │   ├── NewTask.jsx            # Newly assigned tasks
│   │   └── TaskList.jsx           # Combines all task categories
│
├── context/
│   └── AuthProvider.jsx   # Global authentication & user state using Context API
│
├── pages/                # (Optional routing-level components)
│
├── utils/
│   └── localStorage.jsx  # Functions to store/retrieve data from localStorage
│
├── App.css               # Global styling
├── App.jsx               # Main app logic (routing + role handling)
├── main.jsx              # Entry point (React DOM rendering)
│
├── .gitignore            # Git ignored files
├── .prettierrc           # Code formatting rules
├── eslint.config.js      # Linting configuration
```



---

## ⚙️ How to Run the Project

```bash
git clone https://github.com/Nickysinghal/WorkSphere.git
cd emp
npm install
npm run dev
