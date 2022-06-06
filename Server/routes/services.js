// Routes for services
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

//api/services
router.post('/', serviceController.createBusinessCard);
router.post('/', serviceController.createEvent);
router.post('/', serviceController.createJob);
router.post('/', serviceController.createUser);

// Get all services
router.get('/', serviceController.getAllBusinessCards);
router.get('/', serviceController.getAllEvents);
router.get('/', serviceController.getAllJobs);
router.get('/', serviceController.getAllUsers);

// Update services
router.put('/:_id', serviceController.updateBusinessCard);
router.put('/:_id', serviceController.updateEvent);
router.put('/:_id', serviceController.updateJob);
router.put('/:_id', serviceController.updateUser);

router.put('/:_id', serviceController.updateCMS);




module.exports = router;