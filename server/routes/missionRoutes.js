const express = require('express');
const missionController = require('../controllers/missionController');
const router = express.Router();

router.post('/create', missionController.createMission);
router.get('/all', missionController.getAllMissions);
router.get('/:id', missionController.getMissionById);
router.put('/:id', missionController.updateMission);

module.exports = router;
