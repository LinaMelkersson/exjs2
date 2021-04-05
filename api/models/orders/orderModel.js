constmongodb = require('mongoose');
const Order = require('./orderSchema');

exports.getOrder = (req, res) => {
    Order.find()
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json(err))
}

exports.getCustomOrder = (req, res) => {
    Order.findById(req.params.id)
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json(err))
}


exports.saveOrder = (req, res) => {
    const order = new Order ({
        userId: req.body.userId,
        date: req.body.date,
        totalPrice: req.body.totalPrice,
        cart: req.body.cart
    })
    // ordernummer i sinnom tid
  
    order.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'Order created successfully'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create order'
      })
    })
    }
    exports.deleteOrder= (req, res) => {
      Order.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Order deleted'
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode: 500, 
          status: false,
          message: 'Failed to delete product'
        })
      })
  }
