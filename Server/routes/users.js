// Routes for services
const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

//api/services
// Create user
router.post('/', serviceController.createUser);
// Get all user
router.get('/', serviceController.getUsers);
// Update user
router.put('/:_id', serviceController.updateUser);
// Get a user by id. This is exports.getUser from serviceController.js
router.get('/:_id', serviceController.getUser);
// Delete user
router.delete('/:_id', serviceController.deleteUser);



module.exports = router;