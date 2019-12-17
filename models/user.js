const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username:String,
    firstName: String,
    lastName:String,
    email: String,
    password:String,
    likes: [{colors:[Number],
    palletes:{colors:[Number]}
    }]
});

const UploadImage = new Schema({
    img:{ data : Buffer , contentType: String}
})


const User = mongoose.model('user', UserSchema);
module.exports = User;

const Photo = mongoose.model('image', UploadImage);

module.exports = Photo;