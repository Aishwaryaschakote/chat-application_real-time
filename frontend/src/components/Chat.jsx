import { useEffect, useRef, useState } from "react";
import API from "../services/api";
import socket from "../services/socket";
import "./Chat.css";

function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const bottomRef = useRef(null);

    const fetchMessages = async () => {
        try {
            const res = await API.get("/messages");
            setMessages(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // call fetchMessages from effect (allowed) - disable the specific lint rule
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchMessages();

        socket.on("receiveMessage", (newMessage) => {
            setMessages((prev) => [...prev, newMessage]);
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({
            behavior: "smooth",
        });
    }, [messages]);

       const sendMessage = async () => {
        if (!message.trim()) return;

        try {
            await API.post("/messages", {
                message,
            });

            setMessage("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="chat-container">
            <h2>Real-Time Chat Application</h2>

            <div className="chat-box">
                {messages.map((msg) => (
                    <div className="message" key={msg._id}>
                        <p>{msg.message}</p>

                        <span>
                            {new Date(msg.createdAt).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </span>
                    </div>
                ))}
                <div ref={bottomRef}></div>
            </div>

            <div className="input-area">
                <input
                    type="text"
                    placeholder="Enter your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            sendMessage();
                        }
                    }}
                />

                <button
                    onClick={sendMessage}
                    disabled={!message.trim()}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

export default Chat;