const mongoose = require('mongoose');

const missionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  flightPath: [String],
  altitude: { type: Number },
  sensors: [String],
  scheduledTime: { type: Date },
  status: { type: String, enum: ['scheduled', 'in-progress', 'completed', 'aborted'], default: 'scheduled' },
});

module.exports = mongoose.model('Mission', missionSchema);
