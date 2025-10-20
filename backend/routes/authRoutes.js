const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const router = express.Router();
require('dotenv').config();const Tour = require('../models/Tour'); // Add this at the top of authRoutes.js






// Middleware to protect admin pages
const protect = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.redirect('/admin/login');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.id;
    next();
  } catch (err) {
    res.clearCookie('token');
    return res.redirect('/admin/login');
  }
};

// ----------------------------
// REGISTER (one-time use)
// ----------------------------
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res.status(400).render('login', { error: 'Admin already exists' });
    }

    const admin = new Admin({ username, password });
    await admin.save();
    res.status(201).render('login', { error: 'Admin created. You can login now.' });
  } catch (error) {
    res.status(500).render('login', { error: 'Server error' });
  }
});

// ----------------------------
// LOGIN PAGE (GET)
// ----------------------------
router.get('/login', (req, res) => {
  res.render('login', { error: null });
});

// ----------------------------
// LOGIN (POST)
// ----------------------------
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin) return res.status(401).render('login', { error: 'Invalid credentials' });

    const isMatch = await admin.matchPassword(password);
    if (!isMatch) return res.status(401).render('login', { error: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

    res.redirect('dashboard');
  } catch (error) {
    res.status(500).render('login', { error: 'Server error. Please try again.' });
  }
});

// ----------------------------
// DASHBOARD PAGE
// ----------------------------
router.get('/dashboard', protect, (req, res) => {
  res.render('dashboard');
});

// ----------------------------
// LOGOUT
// ----------------------------
router.get('/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/admin/login');
});

module.exports = router;
