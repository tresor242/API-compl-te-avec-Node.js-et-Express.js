const express = require('express');
const { createRide, getRides, getRideById, updateRide, deleteRide } = require('../controllers/RideController');
const router = express.Router();

router.get('/rides', getRides);
router.get('/rides/:id', getRideById);
router.post('/rides', createRide);
router.put('/rides/:id', updateRide);
router.delete('/rides/:id', deleteRide);

module.exports = router;
