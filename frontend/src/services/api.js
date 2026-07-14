import axios from "axios";

const API = axios.create({
    baseURL: "https://chat-application-real-time-backend-fmc8.onrender.com/api",
});

export default API;