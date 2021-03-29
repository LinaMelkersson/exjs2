const router = require('express').Router();
const userModel = require('../models/users/userModel');


router.get('/', userModel.getUser);
router.get('/:id', userModel.getOneUser);

router.patch('/:id', userModel.updateUser);

router.delete('/:id', userModel.deleteUser);

router.post('/register', userModel.registerUser);
router.post('/login', userModel.loginUser);

module.exports = router;