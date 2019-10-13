const Recipe = require('../models/recipe');

exports.fetch = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.send(recipes);
  } catch (err) {
    res.status(500).send();
  }
};

exports.create = async (req, res) => {
  const recipe = new Recipe(req.body);
  try {
    const doc = await recipe.save();
    res.send(doc);
  } catch (err) {
    res.status(400).send();
  }
};

exports.read = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).send();
    }
    res.send(recipe);
  } catch (err) {
    res.status(500).send();
  }
};

exports.update = async (req, res) => {
  try {
    const doc = await Recipe.findOneAndUpdate(
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
    const recipe = await Recipe.findOneAndDelete({
      _id: req.params.id,
    });
    recipe ? res.send(recipe) : res.status(404).send();
  } catch (err) {
    res.status(500).send();
  }
};
