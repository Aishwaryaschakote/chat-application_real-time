const Message = require("../models/Message");

const getMessages = async (req, res) => {
    try {
        const messages = await Message.find().sort({ createdAt: 1 });
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                message: "Message is required",
            });
        }

        const newMessage = await Message.create({
            message,
        });

        // Broadcast to all connected clients
        const io = req.app.get("io");
        io.emit("receiveMessage", newMessage);

        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getMessages,
    sendMessage,
};