const mongodb = require('mongoose')

const productSchema = mongodb.Schema({

  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  img: { type: String, required: true },
  category: { type: String, required: true }

})

module.exports = mongodb.model('product', productSchema);