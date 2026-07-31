# WorkSphere – Employee Management Dashboard

**WorkSphere** is a role-based employee management dashboard built with React. It gives admins a single place to create employees, assign tasks, and track progress, while employees get a focused view of their own work — new, active, completed, and failed tasks — updated in real time.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-38B2AC?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Demo Credentials](#demo-credentials)
- [Available Scripts](#available-scripts)
- [How It Works](#how-it-works)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

WorkSphere simulates a lightweight internal task-management tool. There is no backend — all employee, admin, and task data lives in the browser's **Local Storage**, seeded with realistic sample data on first load. This makes it easy to run, demo, or fork without setting up a database or server.

The app supports two roles:

- **Admin** — adds tasks and assigns them to employees, and gets an overview of everyone's workload.
- **Employee** — logs in to a personal dashboard, sees tasks grouped by status, and moves them through the task lifecycle.

## Features

### Admin Dashboard
- Create new tasks and assign them to any employee
- View all tasks across the organization at a glance
- Dedicated admin login, separate from employee accounts

### Employee Dashboard
- Personalized view of assigned tasks after login
- Tasks organized into **New**, **Active/Accepted**, **Completed**, and **Failed** lists
- Update task status as work progresses
- Task counters summarizing workload at a glance

### Authentication
- Single login form for both admins and employees, with role automatically detected on submit
- Form validation (required fields, email format, etc.) powered by `react-hook-form`
- Session persistence via Local Storage, so a refresh doesn't log the user out
- Logout support

### Data Layer
- Global state managed with React **Context API** (`AuthProvider`)
- All employee/task/admin records persisted to Local Storage, auto-seeded on first run
- Centralized helpers for reading and writing storage (`src/utils/localStorage.jsx`)

## Tech Stack

| Layer | Technology |
|---|---|
| UI | React 19 |
| Build tool | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | React Hook Form |
| State management | React Context API |
| Persistence | Browser Local Storage |
| Linting / Formatting | ESLint, Prettier (with `prettier-plugin-tailwindcss`) |

No backend, database, or external API is required — everything runs client-side.

## Project Structure

```
WorkSphere/
├── public/
│   └── logo.png, logo01.png, logo02.png     # App branding assets
│
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.jsx                # Shared login form (admin + employee)
│   │   │
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx       # Admin view: header, task creation, task list
│   │   │   └── EmployeeDashboard.jsx    # Employee view: personal task lists
│   │   │
│   │   ├── other/
│   │   │   ├── AllTask.jsx              # Full task list (admin view)
│   │   │   ├── CreateTask.jsx           # Task creation form, assigns to an employee
│   │   │   ├── Header.jsx               # Top bar with user info and logout
│   │   │   └── TaskListNumber.jsx       # Task count summary widget
│   │   │
│   │   └── TaskList/
│   │       ├── AcceptTask.jsx           # Accepted / active tasks
│   │       ├── Completetask.jsx         # Completed tasks
│   │       ├── FailedTask.jsx           # Failed tasks
│   │       ├── NewTask.jsx              # Newly assigned tasks
│   │       └── TaskList.jsx             # Combines all task categories
│   │
│   ├── context/
│   │   └── AuthProvider.jsx             # Global auth/employee state (Context API)
│   │
│   ├── utils/
│   │   └── localStorage.jsx             # Seed data + read/write helpers for Local Storage
│   │
│   ├── App.jsx                          # Role routing (Login / Admin / Employee)
│   ├── App.css / index.css              # Global styles
│   └── main.jsx                         # App entry point
│
├── index.html
├── vite.config.js
├── eslint.config.js
├── .prettierrc
└── package.json
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or later
- npm (bundled with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Nickysinghal/WorkSphere.git
cd WorkSphere

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` by default.

> On first launch, sample employees, an admin account, and demo tasks are automatically seeded into Local Storage — no manual setup needed.

## Demo Credentials

| Role | Email | Password |
|---|---|---|
| Admin | `admin@me.com` | `Admin@123` |
| Employee (Arjun) | `e@e.com` | `Aa@123` |
| Employee (Sneha) | `e2@e.com` | `E2@123` |
| Employee (Ravi) | `e3@e.com` | `E3@123` |

> To reset the app to its original demo state, clear your browser's Local Storage for this site and reload the page.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server with hot reload |
| `npm run build` | Build an optimized production bundle |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## How It Works

1. **Login** — `Login.jsx` collects an email and password with validation via `react-hook-form`. `App.jsx` checks the credentials against the admin record and the employee list pulled from `AuthContext`.
2. **Session** — On successful login, the authenticated user's role and data are written to `localStorage["loggedInUser"]`, so refreshing the page keeps the user signed in.
3. **Role routing** — `App.jsx` renders `AdminDashboard` or `EmployeeDashboard` based on the logged-in role.
4. **Task creation** — Admins use `CreateTask.jsx` to build a new task and assign it to an employee by name; the task is pushed onto that employee's record and the global state is updated via `updateEmployees` from `AuthContext`.
5. **Task tracking** — Employees see their tasks split into New, Active, Completed, and Failed buckets (`TaskList/*`), and can update task status as work progresses.

## Roadmap

Ideas for extending WorkSphere beyond its current Local-Storage-based demo:

- [ ] Replace Local Storage with a real backend (e.g. Node/Express + MongoDB, or Firebase)
- [ ] Add password hashing and proper authentication (JWT/OAuth)
- [ ] Employee self-registration and profile management
- [ ] Task due-date notifications and overdue indicators
- [ ] Search, filter, and sort across the task list
- [ ] Unit and integration tests

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m "Add your feature"`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please run `npm run lint` before submitting a PR.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it.

