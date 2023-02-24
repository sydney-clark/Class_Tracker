const express = require('express');
const app = express();
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const trackerController = require('./controllers/classTracker.js');
// const tracker = require('./models/trackerSchema');


app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method')); 
// app.use("/public", express.static(__dirname + "/public")); 
// require('dotenv').config()
app.use('/class_tracker', trackerController);
// ========================
// Seed Route
// ========================

// app.get('/pokedex/seed', (req, res) => {
// 	pokemonSchema.create(Pokemon, (error, seedData) => { //use this line for every route, need scheme and pokemonjs file
// 		console.log('seed data', seedData)
//         // res.send(seedData);
// 	});
// });

// =======================
// Listener
// =======================

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://localhost:27017/tracker', () => {
    console.log('The connection with mongodb is established');
})

app.listen(3000, () => {
    console.log('listening...');
})
////////////////////////////////////////////////////////////////
//when connecting atlas and env use this
////////////////////////////////////////////////////////////////
// mongoose.connect('process.env.MONGODB', () => {
//     console.log('The connection with mongodb is established at ');
// })

// app.listen(3000, () => {
//     console.log('listening...');
// })