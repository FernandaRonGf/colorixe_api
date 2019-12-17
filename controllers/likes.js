const Likes = require("../models/favorites");

exports.addColorToLikes = (req, res) => {
  let params = req.body;
  let newColor = Likes({
    colors: params.colors
  });

  newColor.save((err, like) => {
    err
      ? console.log(err) &&
        res.status(400).json({ message: "error al guardar ek cikir" })
      : res.status(201).json({ message: `${like} fue agregado con exito!` });
  });
};

exports.addPalleteToLikes = (req, res) => {
    let params = req.body;
    let newPallete = Likes({
      palletes: palletes._id
    });
  
    newPallete.save((err, pallete) => {
      err
        ? console.log(err) &&
          res.status(400).json({ message: "error al guardar ek cikir" })
        : res.status(201).json({ message: `${pallete} fue agregado con exito!` });
    });
  };

  exports.userLikes = (req, res) => {
    let params = req.body;
    let userLike = Likes({
      userId:params.userId,
      likes: { colors : params.colors,
                palletes : params.palletes
      }
    });
    userLike.save((err,like) => {
      err
      ? console.log(err) &&
        res.status(400).json({ message: "error al guardar el like" })
      : res.status(201).json({ message: `${like} fue agregado con exito!` });
    })

  }

  exports.getUserLikes = (req, res) => {
    const {id} = req.body
    Likes.findOne(id).exec((err, likes) => {
      err
      ? res.status(400).json({ messages: "El color que buscas no existe" })
      : res.json({ likes });
    })

  }
