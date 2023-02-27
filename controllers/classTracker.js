const express = require('express');
const router = express.Router();
const seedData = require('../models/tracker.js');
const Tracker = require('../models/trackerSchema');



//routes now go in here and say router.get instead of app.get

// ========================
// Seed Route
// ========================

router.get('/seed', (req, res) => {
	Tracker.create(seedData, (error, data) => {
		console.log('seed data', data)
        res.send(data);
	});
});

// ========================
// Index
// ========================

router.get('/index', (req, res) => {
    // res.send('testing index')
    // res.render('index.ejs')
    Tracker.find({}, (error, allTracker) => {
        res.render(
            'index.ejs',
            {
                trackers:allTracker,
            }
        )
    })
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

// router.post('/class_tracker', (req, res) => {
//     res.send('testing')
    // trackerSchema.create(req.body, (error, createdTracker) => {
    //     res.redirect('/class_tracker')
    // })
    //  res.send(req.body);
// })

// =======================
// Edit
// =======================
router.get('/edit', (req, res)=>{
    // 
    res.render("edit")
  })
// router.get('/:id/edit', (req, res)=>{
//     Tracker.findById(req.params.id, (err, foundTracker)=>{ //find the fruit
//         if (err) {
//             console.log('err', err)
//         }
//         res.render(
//     		'edit.ejs', //reroutes to edit.ejs file
//     		{
//     			tracker: foundTracker //pass in found fruit
//     		}
//     	);
//     });
// });




// router.put('/:id', (req, res)=>{
//     trackerSchema.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTracker)=>{
//     res.redirect('/');
//     });
// });


module.exports = router;

