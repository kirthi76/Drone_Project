const express = require('express');
const router = express.Router();

// Add fleet-related routes as needed (e.g., for adding and updating drones)
router.get('/all', (req, res) => {
  res.status(200).json({ message: 'Fleet route (get all drones)' });
});

module.exports = router;
