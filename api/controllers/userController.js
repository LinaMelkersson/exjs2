const router = require('express').Router();

const userModel = require('../models/users/userModel');

router.get('/', userModel.getUser);
router.get('/:id', userModel.getOneUser);

router.post('/', userModel.saveUser);

router.patch('/:id', userModel.updateUser);

router.delete('/:id', userModel.deleteUser);

module.exports = router;