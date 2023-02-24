const express = require('express');
const router = express.Router();
// const Tracker = require('../models/tracker.js')

//routes now go in here and say router.get instead of app.get

// ========================
// Index
// ========================

router.get('/index', (req, res) => {
    // res.send('testing index')
    res.render('index.ejs')
    // trackerSchema.find({}, (tracker, (error, allTracker) => {
    //     res.render(
    //         'index.ejs',
    //         {
    //             tracker:allTracker,
    //         }
    //     )
    // })
    // )
})

// =======================
// New linking new.ejs page to make a new pokemon
// =======================

router.get('/new', (req, res) => {
    // res.send('testing new')
    res.render('new.ejs');
});

// =======================
// Create //processes the data that is submitted in the form
// =======================

router.post('/class_tracker', (req, res) => {
    res.send('testing')
    // trackerSchema.create(req.body, (error, createdTracker) => {
    //     res.redirect('/class_tracker')
    // })
    //  res.send(req.body);
})

module.exports = router;

