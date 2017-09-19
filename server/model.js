  const mongoose = require('mongoose')
	const Schema = mongoose.Schema

    var UserSchema = new Schema({
      email: { type: String, required: true, unique: true},
      nombre: { type: String, required: true },
      password: { type: String, required: true},
      fechaNacimiento: { type: Date, required: true},

    })

  var User = mongoose.model('User', UserSchema)

	
  module.exports = User
