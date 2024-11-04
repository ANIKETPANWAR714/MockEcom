// backend/routes/logout.js
const express = require('express');
const router = express.Router();

// Logout Route
router.post('/', (req, res) => {
  // For stateless applications, just respond with success
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
