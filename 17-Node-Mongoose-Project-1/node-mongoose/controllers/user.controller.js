
const userModel = require('../models/user.model');
const bcrypt = require("bcryptjs");

exports.createUser = (req, res) => {
  const user = new userModel({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    isActive: req.body.isActive,
    userType: req.body.userType,
  });

  user.save((err, data) => {
    if (err) {
      res.json(err);
    } else {
      res.json(data);
    }

  });
}


exports.findAll = (req, res) => {
  userModel.find({})
    .then((data) => { res.json(data) })
    .catch((err) => { res.json(err) })
}
