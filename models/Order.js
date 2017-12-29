const mongoose = require('mongoose');
const Schema = mongoose.Schema; // const { Schema } = mongoose;

const OrderSchema = new Schema({
  state: {
    //Comanda, En proceso, Terminado
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
  TotalOwed: {
    type: Number,
    required: true
  },
  detailsOrder: [
    //lista de platos, cada uno con su precio
    {
      nameDish: {
        type: String,
        required: true
      },
      priceDish: {
        type: Number,
        required: true
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('orders', OrderSchema); // orders collection
