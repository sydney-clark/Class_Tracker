const express = require('express');
const router = express.Router();
const seedData = require('../models/tracker.js');
const Tracker = require('../models/trackerSchema')
//const methodOverride = require('method-override');



//routes now go in here and say router.get instead of app.get

router.delete('/tracker/:id', (req, res)=> {
    Tracker.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/class_tracker/index')
    })
  })
// ========================
// Seed Route
// ========================

// router.get('/seed', (req, res) => {
//     // console.log(seedData)
// 	Tracker.create(seedData, (err, data) => {
//         if(err) {
//             console.log(err)
//         }
// 		console.log('seed data', data)
//         res.send(data);
// 	});
// });


// =======================
// Edit
// =======================
// router.get('/edit', (req, res)=>{
//     // 
//     res.render("edit")
//   })
// router.get('/edit/:id', (req, res)=>{
router.get('/edit/:id', (req, res)=>{
    Tracker.findById(req.params.id, (err, foundTracker)=>{ //find the fruit      
        res.render(
    		'edit.ejs', //reroutes to edit.ejs file
    		{
    			tracker: foundTracker //pass in found fruit
    		}
    	);
    });
});


router.put('/tracker/:id', (req, res)=>{
    Tracker.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTracker)=>{
        // if(err) {
        //     console.log(err)
        // }
        //console.log("updated", updatedTracker)
      res.redirect('/class_tracker/index');
  })
  })








// ========================
// Show
// ========================
router.get("/show/:id", (req, res) => {
    Tracker.findById(req.params.id, (error, foundTracker)=>{
        if(error){
            console.log(error)
        }
        res.render("show.ejs", {
            tracker: foundTracker
            
    });
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

router.post('/class_tracker', (req, res) => {
    res.send('testing')
    Tracker.create(req.body, (error, createdTracker) => {
        // res.redirect('/class_tracker')
    })
    // res.send(req.body);
})


module.exports = router;

