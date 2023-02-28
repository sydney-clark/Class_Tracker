const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const trackerController = require('./controllers/classTracker');
const port = process.env.PORT || 3000;

mongoose.set('strictQuery',true);
mongoose.connect(process.env.MONGODB, () => {
	console.log('connection to mongo is established');
});
// mongoose.connect(process.env.MONGODB, () => {
//     console.log('The connection with mongodb is established at process.env.MONGODB');
// })


const app = express();
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method')); 
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public")); 

app.use('/class_tracker', trackerController);

// =======================
// Listener
// =======================

app.listen(port, () => {
	console.log(`ecom app listening on port: ${port}`);
});

// app.listen(3000, () => {
//     console.log('listening...');
// })
