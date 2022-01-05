/* eslint-disable */
'user strict';
const express = require('express')
const router = express.Router()
const user = require('../controllers/userController');


router.post('/register', user.register);
router.post('/login', user.find);
router.get('/username', user.getUsername);

module.exports = router