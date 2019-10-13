const mongoose = require('mongoose');

const RecipeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    chef: {
      type: String,
      trim: true,
    },
    type: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
    image1: {
      type: String,
      trim: true,
    },
    image2: {
      type: String,
      trim: true,
    },
    effects: {
      type: String,
      trim: true,
    },
    directions: {
      type: String,
      trim: true,
    },
    ingredient: {
      type: String,
      trim: true,
    },
    preptime: {
      type: Number,
      trim: true,
    },
    cooktime: {
      type: Number,
      trim: true,
    },
    totaltime: {
      type: Number,
      trim: true,
    },
    yields: {
      type: Number,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    toJSON: {
      transform: (
        doc,
        {
          _id,
          title,
          recipe,
          type,
          chef,
          effects,
          image,
          image1,
          image2,
          directions,
          ingredient,
          preptime,
          cooktime,
          totaltime,
          yields,
          description,
        },
      ) => ({
        id: _id,
        title,
        recipe,
        chef,
        type,
        image,
        image1,
        image2,
        effects,
        directions,
        ingredient,
        preptime,
        cooktime,
        totaltime,
        yields,
        description,
      }),
    },
  },
);

module.exports = mongoose.model('Recipe', RecipeSchema);
