const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  missionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mission', required: true },
  droneId: { type: mongoose.Schema.Types.ObjectId, ref: 'Drone', required: true },
  duration: { type: Number },  // in minutes
  distance: { type: Number },  // in km
  coverage: { type: Number },  // in % area covered
});

module.exports = mongoose.model('SurveyReport', reportSchema);
