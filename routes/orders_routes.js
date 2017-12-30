const express = require('express');
const mongoose = require('mongoose');

require('../models/Dish');
const Dish = mongoose.model('dishes');

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
