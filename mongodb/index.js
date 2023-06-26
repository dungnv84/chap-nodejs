const express = require('express');
const dotenv = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

dotenv.config(); // Tải biến môi trường từ file .env

const { PORT, MONGODB_URI } = process.env;

app.get("/", (req, res) => {
    res.send('hello');
});

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });
