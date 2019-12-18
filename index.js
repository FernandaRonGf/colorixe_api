 const express = require('express');
 const cors = require('cors');
 const app = express();
require('dotenv').config();
 

 //mongoose connec
 const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
   if (!err) {
       console.log('MONGO esta conectado correctamente')
   } else {
       console.log(err);
   }
   throw err; 
} )
 //constans

const PORT = process.env.PORT;



//express

 app.use(cors(), express.json());

 //User
const { createUser, getUserById , UploadImage} = require('./controllers/user')
app.post('/new/user', createUser);
app.post('/upload', UploadImage);
app.get('/user/id', getUserById);

//Palletes 
const { createPallete, getPalleteList } = require( './controllers/pallete');
app.post('/pallete', createPallete);
app.get('/pallete-list', getPalleteList)


//colors

const {createColor, getColorById} = require('./controllers/color');
app.get('/colorId', getColorById);
app.post('/newcolor', createColor)
//likes 

const {addColorToLikes, addPalleteToLikes, getUserLikes, userLikes} = require( './controllers/likes')

app.post('/likes/colors/user',userLikes)
app.post('/likes/palletes',addPalleteToLikes);
app.post('/likes/colors', addColorToLikes);
app.get('/likes', getUserLikes);

 app.listen(PORT,() => {
    console.log(`Server on port ${PORT}`);
});