// Routes for services
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

//api/services
// Create event
router.post('/', serviceController.createEvent);
// Get all events
router.get('/', serviceController.getEvents);
// Update event
router.put('/:_id', serviceController.updateEvent);
// Get a event by id. This is exports.getEvent from serviceController.js
router.get('/:_id', serviceController.getEvent);
// Delete event
router.delete('/:_id', serviceController.deleteEvent);



module.exports = router;