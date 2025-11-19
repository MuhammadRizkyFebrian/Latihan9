const User = require('../models/user.model');

exports.getAll = async (req, res) => {
  try {
    const data = await User.getAll(); // pastikan getAll() return Promise
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await User.getById(req.params.id);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newUser = req.body;
    const data = await User.create(newUser);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    const data = await User.update(id, newData);
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await User.delete(req.params.id);
    res.send({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
