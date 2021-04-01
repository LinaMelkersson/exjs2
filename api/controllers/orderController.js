const router = require('express').Router();

const orderModel = require('../models/orders/orderModel')

router.get('/', orderModel.getOrder);
router.get('/:id', orderModel.getCustomOrder);

router.post('/', orderModel.saveOrder);

module.exports = router;

