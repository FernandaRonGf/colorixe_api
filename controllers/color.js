const Color = require("../models/colors");

exports.createColor = (req, res) => {
  let params = req.body;
  let newColor = Color({
    name: params.name,
    color: params.color
  });

  newColor.save((err, color) => {
    err
      ? console.log(err) &&
        res.status(400).json({ message: "error al guardar ek cikir" })
      : res.status(201).json({ message: `${color} fue agregado con exito!` });
  });
};

exports.getColorList = (req, res) => {
  Color.find().exec((err, colors) => {
    err
      ? res.status(400).json({ messages: "No se encontro listado" })
      : res.json({ colors });
  });
};

exports.getColorById = (req, res) => { 
     
  const { id } = req.params;
  Color.findOne(id).exec((err, color) => {
    err
      ? res.status(400).json({ messages: "El color que buscas no existe" })
      : res.json({ color });
  });
};
