const Sort = require('../models/sort');

exports.fetch = async (req, res) => {
  try {
    const sorts = await Sort.find();
    res.send(sorts);
  } catch (err) {
    res.status(500).send();
  }
};

exports.create = async (req, res) => {
  const sort = new Sort(req.body);
  try {
    const doc = await sort.save();
    res.send(doc);
  } catch (err) {
    res.status(400).send();
  }
};

exports.read = async (req, res) => {
  try {
    const sort = await Sort.findById(req.params.id);
    if (!sort) {
      return res.status(404).send();
    }
    res.send(sort);
  } catch (err) {
    res.status(500).send();
  }
};

exports.update = async (req, res) => {
  try {
    const doc = await Sort.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true },
    );
    doc ? res.send(doc) : res.status(404).send();
  } catch (err) {
    res.status(500).send();
  }
};

exports.delete = async (req, res) => {
  try {
    const sort = await Sort.findOneAndDelete({ _id: req.params.id });
    sort ? res.send(sort) : res.status(404).send();
  } catch (err) {
    res.status(500).send();
  }
};
