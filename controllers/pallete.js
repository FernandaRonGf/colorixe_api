const Pallete = require("../models/pallete");

exports.createPallete = (req, res) => {
  let params = req.body;
  let newPallete = Pallete({
   title: params.title,
    colors: params.colors
  });

  newPallete.save((err, pallete) => {
    err
      ? console.log(err) &&
        res.status(400).json({ message: "error al guardar ek cikir" })
      : res.status(201).json({ message: `${pallete} fue agregado con exito!` });
  });
};