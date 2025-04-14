const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, enum: ['available', 'in-mission', 'maintenance'], default: 'available' },
  batteryLevel: { type: Number, min: 0, max: 100 },
});

module.exports = mongoose.model('Drone', droneSchema);
