// Routes for services
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

//api/services

// Create cms
router.post('/', serviceController.createCMS);
// Get all cms
router.get('/', serviceController.getCMS);
// Update cms
router.put('/:_id', serviceController.updateCMS);
// Get a job by id. This is exports.getJob from serviceController.js
//router.get('/:_id', serviceController.getCMS);
// Delete job
//router.delete('/:_id', serviceController.deleteCMS);

// Use id if need be.

module.exports = router;