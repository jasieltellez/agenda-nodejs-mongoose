  const mongoose = require('mongoose')
	const Schema = mongoose.Schema


	  var EventSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    email: { type: String, required: true},
    title: { type: String, required: true },
    start: { type: String, required: true},
    end: { type: String, required: false}


  })

  var Evento = mongoose.model('Evento', EventSchema)

	module.exports = Evento
