Project Overview :
This project is a full-stack Employee Management System developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to perform CRUD operations on employee data, including creating, reading, updating, and deleting employee records.

Features
•	Create new employee records with details such as name, email, mobile number, designation, gender, and courses.
•	View a list of all employees with their respective details.
•	Update employee information.
•	Delete employee records.
•	Search for employees by name or email.
•	Responsive design for optimal user experience across devices.


Project Structure:
Backend (Node.js + Express.js):
employee-management-system/
│
├── backend/
│   ├── models/             # MongoDB models for defining data schemas
│   ├── routes/             # Express.js routes for defining API endpoints
│   └── app.js              # Main file to start the Node.js server
│
├── node_modules/           # Dependencies installed via npm
│
├── package.json            # Metadata and project dependencies
├── package-lock.json       # Exact versions of npm dependencies
└── README.md               # Project overview, setup instructions, and usage guidelines

Frontend (React.js):
employee-management-system/
│
├── frontend/
│   ├── public/             # Static assets and HTML template
│   ├── src/                # React components and application logic
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Pages for different routes (e.g., EmployeeList, EmployeeEdit)
│   │   ├── services/       # Functions for making HTTP requests to the backend
│   │   ├── App.css         # Global styles
│   │   ├── App.js          # Root component
│   │   └── index.js        # Entry point for React application
│   └── package.json        # Metadata and project dependencies
│
├── node_modules/           # Dependencies installed via npm
│
├── package.json            # Metadata and project dependencies
├── package-lock.json       # Exact versions of npm dependencies
└── README.md               # Project overview, setup instructions, and usage guidelines