const express = require('express');
const router = express.Router();
const Tour = require('../models/Tour');
const multer = require('multer');
const path = require('path');

// Middleware to protect admin pages
const jwt = require('jsonwebtoken');
const protect = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ message: 'Not authorized' });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.adminId = decoded.id;
    next();
  } catch (err) {
    res.clearCookie('token');
    return res.status(401).json({ message: 'Not authorized' });
  }
};

// ------------------------
// Multer config for image upload
// ------------------------
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images'); // save images here
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  }
});

const upload = multer({ storage });

// ------------------------
// GET all tours
// ------------------------
router.get('/', async (req, res) => {
  try {
    const tours = await Tour.find();
    res.json(tours);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ------------------------
// CREATE a new tour
// ------------------------
router.post('/', protect, upload.single('image'), async (req, res) => {
  try {
    const { title, location, price, description } = req.body;
    const imageUrl = req.file ? `/images/${req.file.filename}` : null;

    const newTour = new Tour({ title, location, price, description, imageUrl });
    await newTour.save();

    // redirect back to dashboard after adding tour
    res.redirect('/admin/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// ------------------------
// DELETE a tour
// ------------------------
router.delete('/:id', protect, async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);
    if (!tour) return res.status(404).json({ message: 'Tour not found' });
    res.json({ message: 'Tour deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
