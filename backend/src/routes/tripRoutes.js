/* eslint-disable */
'user strict';
const express = require('express')
const router = express.Router()
const trip = require('../controllers/tripController');

router.get('/tripInfo', trip.TripInfo)
router.get('/info', trip.info)
router.post('/attraction', trip.saveAttraction)
router.post('/hotel', trip.saveHotel)
router.post('/restaurant', trip.saveRestaurant)
router.post('/note', trip.saveNote)
router.post('/budget', trip.saveBudget)


module.exports = router