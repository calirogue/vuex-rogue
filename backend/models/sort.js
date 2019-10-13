const mongoose = require('mongoose');

const SortSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    image1: {
      type: String,
      required: false,
    },
    image2: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: true,
    },
    cbd: {
      type: Number,
      required: true,
    },
    thc: {
      type: Number,
      required: true,
    },
    effects: {
      type: Array,
      required: false,
    },
    flavor: {
      type: Array,
      required: false,
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      transform: (
        doc,
        {
          _id,
          title,
          description,
          image,
          image1,
          image2,
          type,
          cbd,
          thc,
          effects,
          flavor,
          deleted,
        },
      ) => ({
        id: _id,
        title,
        description,
        image,
        image1,
        image2,
        type,
        cbd,
        thc,
        effects,
        flavor,
        deleted,
      }),
    },
  },
);

module.exports = mongoose.model('Sort', SortSchema);
