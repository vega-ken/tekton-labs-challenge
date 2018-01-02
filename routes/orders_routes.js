const express = require('express');
const mongoose = require('mongoose');

require('../models/Dish');
const Dish = mongoose.model('dishes');

require('../models/Order');
const Order = mongoose.model('orders');

const router = express.Router();

router.get('/getDishes', (req, res) => {
  // conectarse a la bd
  // conseguir los platos - prueba con console.log
  // enviar los platos con sus precios en un json
  // agregar la ruta a index.js del server
  Dish.find({}).then(dishes => {
    //console.log('dishes available: ');
    //console.log(dishes);
    res.json({ dishes: dishes }).end();
  });
});

router.get('/getOrders', (req, res) => {
  Order.find({}).then(orders => {
    res.json({ orders: orders }).end();
  });
});

router.post('/add', (req, res) => {
  console.log(req.body);

  let detailsOrder = [],
    newDish,
    dishIdIteration,
    counter = 0;

  while (1) {
    dishIdIteration = `dishIdDB${counter}`;

    if (req.body[dishIdIteration]) {
      newDish = {
        dishId: req.body[dishIdIteration]
      };

      detailsOrder.push(newDish);
      counter++;
    } else break;
  }

  const newOrder = {
    state: 'Comanded',
    clientName: req.body.clientName,
    paymentType: req.body.paymentType,
    totalOwed: req.body.totalOwed,
    detailsOrder: detailsOrder
  };

  new Order(newOrder).save().then(order => {
    console.log(order);
  });

  res.json({ data: 'data recieved' }).end();
});

/*router.get('/addDish', (req, res) => {
  // esta ruta auxiliar permitia agregar platos a la BD. ya no se usara mas por el momento

  let dish = 'Aji de gallina';
  let dishPrice = 11;
  const newDish = {
    dishName: dish,
    dishPrice: dishPrice
  };
  new Dish(newDish).save().then(dish => {
    console.log(`plato ${dish} agregado`);
  });
});*/

module.exports = router;
