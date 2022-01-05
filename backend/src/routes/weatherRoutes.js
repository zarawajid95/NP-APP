/* eslint-disable */
'user strict';
const express = require('express')
const router = express.Router()
const weather = require('../controllers/weatherController');

router.post('/forecast', weather.forecast);
router.post('/destination', weather.saveDestination)
router.get('/destination', weather.getDestination)

module.exports = router