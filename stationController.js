const Station = require('../models/Station');

exports.getAllStations = async (req, res) => {
  const stations = await Station.find();
  res.json(stations);
};

exports.createStation = async (req, res) => {
  const station = new Station(req.body);
  await station.save();
  res.status(201).json(station);
};
