
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

const blogRoutes = require('./routes/blogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const commentRoutes = require('./routes/commentRoutes');
const likeRoutes = require('./routes/likeRoutes');
const postViewRecordsRoutes = require('./routes/postViewRecordsRoutes');
const profileRecordsRoutes = require('./routes/profileRoutes');
const userRoutes = require('./routes/userRoutes');

// Just calling a middleware for parsing JSON
app.use(express.json());

// Connect to the database before you start
mongoose.connect(process.env.DB_CONNECTION_STRING);

app.use('/blog', blogRoutes);
app.use('/category', categoryRoutes);
app.use('/comment', commentRoutes);
app.use('/like', likeRoutes);
app.use('/postViewRecords', postViewRecordsRoutes);
app.use('/profile', profileRecordsRoutes);
app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}...`);
});