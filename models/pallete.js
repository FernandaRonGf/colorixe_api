const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PalleteSchema = new Schema({
    title: String,
    colors:[{ color:[Number]}]

});

const Pallete = mongoose.model('pallete', PalleteSchema);

module.exports = Pallete;