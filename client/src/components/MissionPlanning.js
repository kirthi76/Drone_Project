import React, { useState } from 'react';
import axios from 'axios';

const MissionPlanning = () => {
  const [mission, setMission] = useState({
    name: '',
    location: '',
    flightPath: [],
    altitude: 0,
    sensors: [],
    scheduledTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMission({
      ...mission,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/missions/create', mission);
      console.log('Mission created:', response.data);
    } catch (error) {
      console.error('Error creating mission:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={mission.name} onChange={handleChange} placeholder="Mission Name" required />
      <input type="text" name="location" value={mission.location} onChange={handleChange} placeholder="Location" required />
      <input type="number" name="altitude" value={mission.altitude} onChange={handleChange} placeholder="Altitude" />
      <input type="text" name="sensors" value={mission.sensors} onChange={handleChange} placeholder="Sensors (comma separated)" />
      <input type="datetime-local" name="scheduledTime" value={mission.scheduledTime} onChange={handleChange} required />
      <button type="submit">Create Mission</button>
    </form>
  );
};

export default MissionPlanning;
