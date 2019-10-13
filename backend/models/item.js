const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    summary: {
      type: String,
      required: false,
    },
    designer: {
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
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    slug: {
      type: String,
      required: false,
    }
  },
  {
    toJSON: {
      transform: (
        doc,
        {
          _id,
          title,
          summary,
          designer,
          image,
          image1,
          image2,
          slug,
          description,
          price,
        },
      ) => ({
        id: _id,
        title,
        summary,
        designer,
        image,
        image1,
        image2,
        slug,
        description,
        price,
      }),
    },
  },
);

module.exports = mongoose.model('Item', ItemSchema);
