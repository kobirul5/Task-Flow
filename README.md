# Task Flow:- Task Management Application

A Task Management Application where users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: To-Do, In Progress, and Done. The app ensures real-time updates and persistence with a clean, responsive UI.

---

## Live Link
[Live Demo][https://task-flow-0.web.app/]

---

## Technologies Used
- **Frontend:** Vite.js, React, react-beautiful-dnd  
- **Backend:** Express.js, MongoDB  
- **Authentication:** Firebase Authentication (Google Sign-In)  
- **Real-Time Updates:** MongoDB Change Streams / WebSockets  

---

## Features
- User Authentication with Google Sign-In  
- Add, Edit, Delete, and Reorder tasks  
- Drag-and-drop tasks between categories  
- Instant data persistence and real-time synchronization  
- Responsive design for desktop and mobile  

---

## Installation
**1. Clone the repository:**  
```bash
git clone YOUR_REPO_LINK_HERE
cd YOUR_REPO_FOLDER
```

**2. Install dependencies:**  
- Frontend  
```bash
cd frontend
npm install
```

- Backend  
```bash
cd backend
npm install
```

**3. Configure environment variables:**  
Create `.env` files in both frontend and backend folders with necessary configurations (e.g., Firebase credentials, MongoDB URI).

**4. Run the application:**  
- Frontend  
```bash
npm run dev
```

- Backend  
```bash
npm start
```

---

## Dependencies
- **Frontend:**  
  - React  
  - Firebase Authentication  

- **Backend:**  
  - Express.js  
  - MongoDB   
  - CORS  
  - dotenv  




