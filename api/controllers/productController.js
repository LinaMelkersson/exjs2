const router = require('express').Router();

const productModel = require('../models/products/productModel');

router.get('/', productModel.getProduct);
router.get('/:id', productModel.getOneProduct);

router.post('/', productModel.saveProduct);

router.patch('/:id', productModel.updateProduct);

router.delete('/:id', productModel.deleteProduct);

module.exports = router;