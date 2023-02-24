const express = require('express');
const router = express.Router();
// const Tracker = require('../models/tracker.js')

//routes now go in here and say router.get instead of app.get

// ========================
// Index
// ========================

router.get('/index', (req, res) => {
    res.send('testing index')
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
    res.send('testing new')
    // res.render('new.ejs');
});

module.exports = router;

