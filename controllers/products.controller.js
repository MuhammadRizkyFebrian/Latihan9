const Products = require('../models/products.model');

exports.getAll = async (req, res) => {
  try {
    const rows = await Products.getAll(); // getAll() harus return Promise
    res.send(rows);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.getById = async (req, res) => {
  try {
    const row = await Products.getById(req.params.id);
    res.send(row);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.create = async (req, res) => {
  try {
    const result = await Products.create(req.body);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.update = async (req, res) => {
  try {
    const result = await Products.update(req.params.id, req.body);
    res.send(result);
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.delete = async (req, res) => {
  try {
    await Products.delete(req.params.id);
    res.send({ message: 'deleted' });
  } catch (e) {
    res.status(500).send(e);
  }
};
