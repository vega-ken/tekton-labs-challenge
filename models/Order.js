const mongoose = require('mongoose');
const Schema = mongoose.Schema; // const { Schema } = mongoose;

const OrderSchema = new Schema({
  state: {
    //Comanded, In process, Completed
    type: String,
    required: true
  },
  clientName: {
    type: String,
    required: true
  },
  paymentType: {
    type: String,
    required: true
  },
  totalOwed: {
    type: Number,
    required: true
  },
  detailsOrder: [
    {
      dishId: {
        type: Schema.Types.ObjectId,
        ref: 'dishes'
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('orders', OrderSchema); // orders collection
