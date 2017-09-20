const express = require('express');
const Router = express.Router();
const User = require('./model.js')
const Evento = require('./modelEvento.js')
const path = require('path');




// Agregar a un usuario
Router.get('/newUser', function(req, res) {
  var ser = new User({
    email: "jasiel@gmail.com",
      nombre: "Jasiel Tellez",
      password: 'nextu',
      fechaNacimiento: "1990-09-22"
          })
  ser.save(function(error) {
      if (error) {
          res.status(500)
          res.json(error)
      }
      res.send("Registro guardado")
  })
})

Router.post('/login',function(req, res){
  let email = req.body.user
  let password=req.body.pass
  User.findOne({email: email,password:password}).exec(function(err, user){
      if (err) {
          res.send('Error en la base de datos')
      }
    else  if (!user) {
        res.send("Usuario o contraseña incorrecto")
      }
    else {

      res.send('Validado')
    }
  })

})

Router.post('/events/new',function(req,res){
let id=Math.floor(Math.random() * (10000)) + 1;
let title=req.body.title
let start=req.body.start
let end=req.body.end

let email='jasiel@gmail.com'

var ev = new Evento({
 id:id,
 title:title,
 start:start,
 end:end,

 email:email
        })
ev.save(function(error) {
    if (error) {
        res.send('Error al insertar el registro '+error)
    }
    else {
      res.send("Registro guardado")
    }

})

})
Router.get('/events/all',function(req, res){


  Evento.find({}).exec(function(err, eventos){
      if (err) {
          res.send('Error en la base de datos')
      }

    else {
      res.send(eventos)
    }
  })
})

Router.post('/events/delete/*',function(req,res){
  Evento.remove({id:req.body.id},function(error) {
      if (error) {
          res.send('Error al eliminar el evento '+error)
      }
      else {
        res.send("Evento Eliminado")
      }
      })
})

Router.post('/events/update',function(req,res){

Evento.update({id:req.body.id},{start:req.body.start,end:req.body.end},function(error) {
      if (error) {
          res.send('Error al actualizar el evento ')
      }
      else {
        res.send("Evento Actualizado")
      }
    })
})


module.exports = Router
