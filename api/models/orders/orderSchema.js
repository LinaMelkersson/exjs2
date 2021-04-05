const mongodb = require('mongoose')

// const cartSchema = mongodb.Schema({
//     quantity: {type: Number, required: false},
//     title: { type: String, required: false },
//     price: { type: Number, required: false },
//     img: { type: String, required: false },
// })

const orderSchema = mongodb.Schema({
    userId: {type: String, require: true },
    date: { type: Date, default: Date.now },
    totalPrice: { type: String},
    // cart: [cartSchema],
    cart: { type: Array},
})
// ordernummer i sinnom tid

module.exports = mongodb.model('order', orderSchema);