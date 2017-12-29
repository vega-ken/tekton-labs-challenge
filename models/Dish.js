const mongoose = require('mongoose');
const Schema = mongoose.Schema; // const { Schema } = mongoose;

const DishSchema = new Schema({
  dishName: {
    type: String,
    required: true
  },
  dishPrice: {
    type: Number,
    required: true
  }
});

mongoose.model('dishes', DishSchema); // dishes collection
