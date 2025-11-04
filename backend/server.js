const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const tourRoutes = require('./routes/tourRoutes');

const authRoutes = require('./routes/authRoutes');


require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use('/api/tours', tourRoutes); // this will handle /api/tours requests
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Routes
app.use('/admin', authRoutes);


// Redirect root to login page
app.get('/', (req, res) => res.redirect('/admin/login'));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () =>
  console.log(`🚀 Server running in Docker on port ${PORT}`)
);
