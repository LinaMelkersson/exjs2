const mongodb = require('mongoose')

const userSchema = mongodb.Schema({

//   title: { type: String, required: true },
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   img: { type: String, required: true },
//   category: { type: String, required: true }

})

module.exports = mongodb.model('user', userSchema);