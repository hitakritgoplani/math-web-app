    const express = require('express');
    const mongoose = require('mongoose');
    const cors = require('cors');
    const jwt = require('jsonwebtoken');
    const UsersModel = require('./models/Users');

    const app = express();
    app.use(express.json());
    app.use(cors());

    mongoose.connect("mongodb://127.0.0.1:27017/math").then(() => {
        console.log("MongoDB connected successfully");
    }).catch(err => {
        console.error("MongoDB connection error:", err);
    });

    app.post('/login', async (req, res) => {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ error: "Email ID and Password is required" });
            }
            const user = await UsersModel.findOne({ email: email });
            if (!user || user.password !== password) {
                return res.status(401).json({ error: "Incorrect credentials" });
            }
            // Generate JWT token
            const token = jwt.sign({ userId: user._id }, 'your_secret_key_here', { expiresIn: '1h' }); // Change your_secret_key_here
            res.json({ token: token, message:"Success"}).status(200);
        } catch (error) {
            console.error("Error while logging in: ", error);
            res.status(500).json({ error: "Error while logging in. Please try again." });
        }
    });

    app.post('/register', async (req, res) => {
        try {
            const {email, password, name} = req.body;
            if (!email || !password || !name) {
                return res.status(400).json({ error: "Email ID, Username and Password is required" })
            }
            const user = await UsersModel.create(req.body);
            res.status(200).json(user);
        } catch (err) {
            console.error("Error while registering user:", err);
            res.status(500).json({ error: "Error while registering user" });
        }
    });

    app.listen(3001, 'localhost', () => {
        console.log('Server is running on port 3001');
    });
