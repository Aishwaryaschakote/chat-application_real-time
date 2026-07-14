#  Real-Time Chat Application💬

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
- 💾 Persistent chat history with MongoDB
- 🕒 Displays message timestamps
- 🔄 Automatic scrolling to the latest message
- 🌐 REST APIs for fetching and sending messages
- 📱 Responsive and clean user interface
- ⚠️ Basic error handling

---

# 🛠️ Tech Stack

<table align="center">
<tr>
<td align="center" width="50%">

## 🎨 Frontend

<p align="center">

<img src="https://skillicons.dev/icons?i=react" width="48" />
<img src="https://skillicons.dev/icons?i=css" width="48" />
<img src="https://skillicons.dev/icons?i=js" width="48" />

</p>

- React
- Axios
- Socket.io Client
- CSS

</td>

<td align="center" width="50%">

## ⚙️ Backend

<p align="center">

<img src="https://skillicons.dev/icons?i=nodejs" width="48" />
<img src="https://skillicons.dev/icons?i=express" width="48" />
<img src="https://skillicons.dev/icons?i=mongodb" width="48" />

</p>

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Socket.io

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

Move into the backend folder.

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

Run the application.

```bash
npm run dev
```

The application will be available at:

```
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

Request Body

```json
{
  "message": "Hello"
}
```

---

# 💡 Design Decisions

- React is used to build a responsive and interactive user interface.
- Express.js provides RESTful APIs for message operations.
- Socket.io enables real-time communication between connected clients.
- MongoDB stores chat history, ensuring messages remain available after page refresh.
- The project follows a modular folder structure with separate models, controllers, routes, and services for better maintainability.

---

# 📌 Assumptions

- The application uses a single shared chat room.
- User authentication is not implemented, as it was optional.
- Internet connectivity is required for real-time communication.

---

# 👩‍💻 Author

**Aishwarya**

<p align="left">
<a href="https://github.com/Aishwaryaschakote">
<img src="https://img.shields.io/badge/GitHub-Aishwarya%20Chakote-181717?style=for-the-badge&logo=github" />
</a>
</p>

---

<p align="center">
⭐ If you found this project useful, consider giving it a star on GitHub.
</p>
