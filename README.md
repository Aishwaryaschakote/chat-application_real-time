# 💬 Real-Time Chat Application

<p align="center">
  A simple real-time chat application built using <b>React, Node.js, Express, MongoDB, and Socket.io</b>.
  <br>
  Messages are delivered instantly and stored in MongoDB, allowing chat history to persist even after refreshing the application.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white" />
</p>

---

# ✨ Features

- 🚀 Real-time messaging using Socket.io
- 💬 Send and receive messages instantly
- 💾 Persistent chat history using MongoDB
- 🕒 Display message timestamps
- 🌐 REST API for sending and fetching messages
- 📱 Clean and responsive user interface
- 🔄 Automatic scroll to the latest message
- ⚠️ Basic error handling

---

# 🛠️ Tech Stack

<table align="center" width="90%">
<tr>

<td align="center" valign="top" width="50%">

## 🎨 Frontend

<p align="center">
<img src="https://skillicons.dev/icons?i=react" width="50"/>
<img src="https://skillicons.dev/icons?i=css" width="50"/>
<img src="https://skillicons.dev/icons?i=javascript" width="50"/>
</p>

React  
Axios  
Socket.io Client  
CSS

</td>

<td align="center" valign="top" width="50%">

## ⚙️ Backend

<p align="center">
<img src="https://skillicons.dev/icons?i=nodejs" width="50"/>
<img src="https://skillicons.dev/icons?i=express" width="50"/>
<img src="https://skillicons.dev/icons?i=mongodb" width="50"/>
</p>

Node.js  
Express.js  
MongoDB Atlas  
Mongoose  
Socket.io

</td>

</tr>
</table>

---

# 📁 Project Structure

```text
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

# 🚀 Installation

## Clone the Repository

```bash
git clone https://github.com/Aishwaryaschakote/chat-application_real-time.git
```

```bash
cd chat-application_real-time
```

---

# ⚙️ Backend Setup

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

# 🎨 Frontend Setup

Navigate to the frontend folder.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173
```

---

# 📡 API Endpoints

## Get All Messages

```http
GET /api/messages
```

## Send a Message

```http
POST /api/messages
```

### Request Body

```json
{
  "message": "Hello"
}
```

---

# 💡 Design Decisions

- React provides a responsive and interactive user interface.
- Express.js exposes REST APIs for message operations.
- Socket.io enables real-time communication between connected users.
- MongoDB stores chat history, ensuring messages remain available after refreshing.
- The application follows a modular architecture with separate folders for models, controllers, routes, and services to improve maintainability and scalability.

---

# 📌 Assumptions

- The application uses a single shared chat room.
- User authentication is not implemented, as it was optional.
- Internet connectivity is required for real-time communication.

---

# 👩‍💻 Author

**Aishwarya Chakote**

<p>
<a href="https://github.com/Aishwaryaschakote">
<img src="https://img.shields.io/badge/GitHub-Aishwarya%20Chakote-181717?style=for-the-badge&logo=github" />
</a>
</p>

---

<p align="center">
⭐ If you found this project useful, consider giving it a star on GitHub.
</p>
