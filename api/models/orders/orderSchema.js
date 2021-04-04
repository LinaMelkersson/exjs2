const mongodb = require('mongoose')

const cartSchema = mongodb.Schema({
    quantity: {type: Number, required: false},
    title: { type: String, required: false },
    price: { type: Number, required: false },
    img: { type: String, required: false },
})

const orderSchema = mongodb.Schema({
    userId: {type: String, require: true },
    date: { type: Date, default: Date.now },
    // orderNumber: { type: Number, required: true },
    totalPrice: { type: String},
    cart: [cartSchema]
})

module.exports = mongodb.model('order', orderSchema);