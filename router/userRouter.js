const express = require('express');
var router = express.Router();
const userCtrl = require('../controller/userCtrl');
router
    .get('/login', userCtrl.login)
    .get('/register', userCtrl.register)
module.exports = router;