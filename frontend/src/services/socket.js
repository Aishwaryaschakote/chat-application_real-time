import { io } from "socket.io-client";

const socket = io("https://chat-application-real-time-backend-fmc8.onrender.com");

export default socket;