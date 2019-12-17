const User = require("../models/user");
const  UploadImage  = require('../models/user')
exports.createUser = (req, res) => {
  let params = req.body;
  let newUser = User({
    username:params.username,
    firstName: params.firstName,
    lastName:params.lastName,
    email: params.email,
    password:params.password,
  });

  newUser.save((err, user) => {
    err
      ? console.log(err) &&
        res.status(400).json({ message: "error al guardar el user" })
      : res.status(201).json({ message: `${user} fue agregado con exito!` });
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  User.findOne(id).exec((err, user) => {
    err
      ? res.status(400).json({ message: "there was an error", err })
      : res.json({ user });
  });
};

exports.UploadImage = (req, res) => {
  let params = req.body;
  let newImage = Photo({
    img: {
      data: params.data,
      contenType: params.contenType
    }
  });
  newImage.save((err, image) => {
    err
      ? res.status(400).json({ message: "there was an error", err })
      : res.json({ image });
  });
};
