# Real-Time Chat Application

A simple real-time chat application built using React, Node.js, Express, MongoDB, and Socket.io.

The application allows users to send and receive messages instantly while storing all messages in MongoDB so that chat history is available even after refreshing the page.

---

## Features

- Real-time messaging using Socket.io
- Send and receive messages instantly
- Persistent chat history using MongoDB
- Display message timestamps
- REST API for sending and fetching messages
- Clean and responsive user interface
- Automatic scroll to the latest message
- Basic error handling

---

## Tech Stack

### Frontend
- React
- Axios
- Socket.io Client
- CSS

### Backend
- Node.js
- Express.js
- Socket.io
- MongoDB Atlas
- Mongoose

---

## Project Structure

```
Vedaz-Chat-App
│
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── socket
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## Installation

### Clone the repository

```bash
git clone https://github.com/Aishwaryaschakote/chat-application_real-time.git
```

Move into the project folder.

```bash
cd chat-application_real-time
```

---

## Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=5000

MONGODB_URI=YOUR_MONGODB_CONNECTION_STRING
```

Start the backend server.

```bash
node server.js
```

---

## Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the application.

```bash
npm run dev
```

The frontend will run at

```
http://localhost:5173
```

---

## API Endpoints

### Get all messages

```
GET /api/messages
```

### Send a message

```
POST /api/messages
```

Request Body

```json
{
    "message":"Hello"
}
```

---

## Design Decisions

- React was used to build a simple and responsive user interface.
- Express was used to build REST APIs.
- Socket.io was used for real-time communication.
- MongoDB stores chat history so messages are not lost after refreshing.
- The project is divided into separate folders for models, controllers, routes, and services to keep the code organized.

---

## Assumptions

- All users participate in a single shared chat room.
- Authentication is not implemented since it was an optional requirement.
- Internet connectivity is required for real-time communication.

---

## Future Improvements

Some features that can be added in future versions include:

- User authentication
- Typing indicator
- Online/offline user status
- Read receipts
- Multiple chat rooms
- Message deletion and editing

---

## Author

**Aishwarya Chakote**

GitHub:
https://github.com/Aishwaryaschakote
