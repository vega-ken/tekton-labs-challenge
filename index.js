const express = require('express');

const mongoose = require('mongoose');
const keys = require('./config/keys');

const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
