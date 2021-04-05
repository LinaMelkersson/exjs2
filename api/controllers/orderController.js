const router = require('express').Router();

const orderModel = require('../models/orders/orderModel')

router.get('/', orderModel.getOrder);
router.get('/:id', orderModel.getCustomOrder);

router.post('/save', orderModel.saveOrder);

router.delete('/:id', orderModel.deleteOrder);

module.exports = router;

