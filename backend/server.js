const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const colors = require('colors');
const errorHandler = require('./middleware/errorMiddleware');
const protect = require('./middleware/authMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());

app.use(express.json());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/bookmarks', protect, require('./routes/bookmarkRoutes'));
app.use('/api/data', require('./routes/dataRoute'));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
