// Routes for services
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

//api/services
// Create business card
router.post('/', serviceController.createBusinessCard);
// Get all business cards
router.get('/', serviceController.getBusinessCards);
// Update business card
router.put('/:_id', serviceController.updateBusinessCard);
// Get a business card by id. This is exports.getBusinessCard from serviceController.js
router.get('/:_id', serviceController.getBusinessCard);
// Delete business card
router.delete('/:_id', serviceController.deleteBusinessCard);



module.exports = router;