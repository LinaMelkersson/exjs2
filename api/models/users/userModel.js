constmongodb = require('mongoose');
const User = require('./userSchema');

exports.getUser = (req, res) => {
    User.find()
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json(err))
}

exports.getOneUser = (req, res) => {
    User.findById(req.params.id)
    .then(data=>res.status(200).json(data))
    .catch(err=>res.status(500).json(err))
}


exports.saveUser = (req, res) => {
    const product = new User ({
  
    //   title: req.body.title,
    //   description: req.body.description,
    //   price: req.body.price,
    //   img: req.body.img,
    //   category: req.body.category
    // Borde vara det från Registreringen? Hur får jag det från där till här...?
    })
  
    user.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201,
        status: true,
        message: 'User created successfully'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create user'
      })
    })
  }


  exports.deleteUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'User deleted'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500, 
        status: false,
        message: 'Failed to delete user'
      })
    })
  }
  
  exports.updateUser = (req, res) => {
    User.updateOne({ _id: req.params.id }, req.body)
    .then(() => {
      res.status(200).json({
        statusCode: 200,
        status: true,
        message: 'User updated successfully'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to update user'
      })
    })
  }
