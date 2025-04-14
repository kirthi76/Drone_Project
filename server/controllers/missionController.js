const Mission = require('../models/Mission');

exports.createMission = async (req, res) => {
  try {
    const mission = new Mission(req.body);
    await mission.save();
    res.status(201).json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Error creating mission' });
  }
};

exports.getAllMissions = async (req, res) => {
  try {
    const missions = await Mission.find();
    res.status(200).json(missions);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching missions' });
  }
};

exports.getMissionById = async (req, res) => {
  try {
    const mission = await Mission.findById(req.params.id);
    if (!mission) return res.status(404).json({ error: 'Mission not found' });
    res.status(200).json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching mission' });
  }
};

exports.updateMission = async (req, res) => {
  try {
    const mission = await Mission.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(mission);
  } catch (error) {
    res.status(500).json({ error: 'Error updating mission' });
  }
};
