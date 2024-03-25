const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const UsersModel = require('./models/Users');
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const secretKey = process.env.API_KEY;
const genAI = new GoogleGenerativeAI(secretKey);

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
            return res.status(400).json({ error: "Email ID and Password are required" });
        }
        const user = await UsersModel.findOne({ email: email });
        if (!user || user.password !== password) {
            return res.status(401).json({ error: "Incorrect credentials" });
        }
        const token = jwt.sign({ userId: user._id }, 'your_secret_key_here', { expiresIn: '1h' });
        user.userToken = token;
        await user.save() 
        res.json({ token: token, message: "Success" }).status(200);
    } catch (error) {
        console.error("Error while logging in: ", error);
        res.status(500).json({ error: "Error while logging in. Please try again." });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        if (!email || !password || !name) {
            return res.status(400).json({ error: "Email ID, Username, and Password are required" });
        }
        const existingUser = await UsersModel.findOne({ email: email });
        if (existingUser) {
            return res.status(409).json({ error: "User already exists" });
        }
        const newUser = await UsersModel.create({ userToken:"", email, password, name, questionsSolved:0, correctAnswers:0, inCorrectAnswers:0});
        const token = jwt.sign({ userId: newUser._id }, 'your_secret_key_here', { expiresIn: '1h' });
        newUser.userToken = token;
        await newUser.save()
        res.status(200).json({ token: token, user: newUser });
    } catch (err) {
        console.error("Error while registering user:", err);
        res.status(500).json({ error: "Error while registering user" });
    }
});

app.post('/information-stats', async (req, res) => {
    try {
        const { userToken, correct } = req.body;
        const user = await UsersModel.findOne({ userToken: userToken }); 
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        user.questionsSolved+= 1;
        if(correct === true){
            user.correctAnswers+=1
        } else {
            user.inCorrectAnswers+=1
        }
        await user.save();
        res.status(200).json({ message: "Questions solved count updated successfully" });
    } catch (err) {
        console.error("Error while updating questions solved count:", err);
        res.status(500).json({ error: "Error while updating questions solved count" });
    }
});

app.get('/information-stats', async (req, res) => {
    const { userToken } = req.query; // Use req.query to access query parameters
    const user = await UsersModel.findOne({ userToken: userToken }); 
    if(user){
        console.log("sent")
        res.json({correctAnswers: user.correctAnswers, inCorrectAnswers: user.inCorrectAnswers}).status(200)
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

app.get('/word-problem', async (req, res) => {
        // For text-only input, use the gemini-pro model
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = `Create a short(< 30 words), fun and engaging word problem for a child that incorporates elements of addition, subtraction, multiplication, and comparison. The word problem should be creative. It should also be designed to stimulate critical thinking and problem-solving skills while being enjoyable for the child to solve. Please ensure that the word problem is clear, concise, and presents a relatable scenario that captures the child's interest. The problem should allow for multiple approaches to finding the solution, promoting flexibility and creativity in the child's mathematical reasoning.in the response only include the question without mentioning the topic and provide the correct answer after verifying the answer, in number format, without explaination in json format like {"question":"", "answer":""}`
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const jsonObject = JSON.parse(response.text());
        const question = jsonObject.question;
        const answer = jsonObject.answer;
        console.log(question)
        console.log(answer)
        res.status(200).json({ question: question, answer: answer});
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
