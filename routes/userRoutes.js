const express = require('express');
const mongoose = require('mongoose');

//const bcrypt = require('bcryptjs');
//const passport = require('passport');

//cargar el modelo usuario
require('../models/User');
const User = mongoose.model('users');

//manejo de rutas
const router = express.Router();

router.post('/register', (req, res) => {
  //console.log('El usuario ha enviado informacion para registrarse: ');
  //console.log(req.body);
  let errors = [];

  if (req.body.password != req.body.password2) {
    errors.push({ text: 'Passwords do not match' });
  }

  if (req.body.password.length < 4) {
    errors.push({ text: 'Password need to have at least 4 characters' });
  }

  // verificar que el email contenga tekton en el dominio
  let email = req.body.email;
  let index = email.indexOf('@');

  email = email.slice(index);
  index = email.indexOf('tekton');

  if (index !== -1) {
    console.log('el correo si tiene tekton en su dominio');
  } else {
    //enviar de vuelta a la pagina de registro con la data ingresada
    console.log('solo se pueden registrar personas del dominio tekton');
  }

  if (errors.length > 0) {
    //renderizar la vista de registro y enviar la data ingresada y los errores
    /*{
        errors: errors,
        name : req.body.name, 
        email : req.body.email,
        password : req.body.password,
        password2 : req.body.password2,
        role : req.body.role
      }*/
  } else {
    // verificar si email ya está registrado
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        // enviar mensaje de que ese email ya esta registrado y la data ingresada
      } else {
        // registrar al nuevo usuario y luego redireccionar a login
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role
        });

        //!!! encriptar contraseña antes de guardarlo
        newUser
          .save()
          .then(newUser => {
            res.redirect('/users/login');
          })
          .catch(err => {
            console.log(err);
            return;
          });
      }
    });
  }

  // no se puede renderizar desde aqui una vista... o si? y si se puede... como sabe que datos recibir // res.send('proceso de registro')
});

module.exports = router;
