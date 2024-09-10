const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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
        var { roll, standard, division } = req.body;
        const user = await UsersModel.findOne({ standard: standard, division: division, rollNo: roll, });
        if(user){
            res.status(200).json({ message: "Success", roll: roll, standard: standard, division: division});
        } else {
            res.status(400).json({ message: "Student details not found"});
        }
    } catch (err) {
        console.error("Error while logging in user:", err);
        res.status(500).json({ error: "Error while logging in" });
    }
});

app.post('/information-stats', async (req, res) => {
    try {
        const { roll, standard, divison, page, correct } = req.body;
        const user = await UsersModel.findOne({ rollNo: roll, standard: standard, divison:divison }); 
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        if(correct === true){
            var index = 'correct'+ page;
            user.stats[index] += 1
        } else {
            var index = 'inCorrect'+ page;
            user.stats[index] += 1
        }
        await user.save();
        res.status(200).json({ message: "Questions solved count updated successfully" });
    } catch (err) {
        console.error("Error while updating questions solved count:", err);
        res.status(500).json({ error: "Error while updating questions solved count" });
    }
});

app.get('/get-report', async (req, res) => {
    try {
        const { userIpAddress, email, name } = req.body;
        if (!email || !name) {
            return res.status(400).json({ error: "Email ID of guardian and name of child are required" });
        }
        const user = await UsersModel.findOne({ userIpAddress: userIpAddress });
        console.log(user.stats)
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
        const prompt = 'Generate a short report of a child named ' + name + ' who solved math problems. The details are given below ' + user.stats;
        const result = await model.generateContent(prompt);
        const response = await result.response;
        res.json({ message: response.text() }).status(200);
    } catch (error) {
        console.error("Error while logging in: ", error);
        res.status(500).json({ error: "Error while logging in. Please try again." });
    }
});

app.get('/word-problem', async (req, res) => {
    // For text-only input, use the gemini-pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `Create a short 15 words, easy, different story, fun and creative word problem using real life scenarios for children that is based on either of the following addition, subtraction, multiplication, divison, and comparison. In the response only include the question without mentioning the topic and provide the correct answer after verifying the answer, in number format, without explaination in json format like {"question":"", "answer":""}`
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
