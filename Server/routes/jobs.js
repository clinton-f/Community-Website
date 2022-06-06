// Routes for services
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

//api/services
// Create job
router.post('/', serviceController.createJob);
// Get all jobs
router.get('/', serviceController.getJobs);
// Update job
router.put('/:_id', serviceController.updateJob);
// Get a job by id. This is exports.getJob from serviceController.js
router.get('/:_id', serviceController.getJob);
// Delete job
router.delete('/:_id', serviceController.deleteJob);



module.exports = router;