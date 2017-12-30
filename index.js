const express = require('express');

const mongoose = require('mongoose');
const keys = require('./config/keys');

const bodyParser = require('body-parser');

const userRoutes = require('./routes/users_routes');
const orderRoutes = require('./routes/orders_routes');

//connect to mongoose
mongoose
  .connect(keys.mongoURI)
  .then(() => {
    console.log('mongoDB connected...');
  })
  .catch(err => console.log(err));

const app = express();

// body parser - access form values
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
