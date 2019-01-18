var express = require('express');
var router = express.Router();
const adminManagmentCtrl = require('../controller/adminManagmentCtrl')

router.get('/testApi', adminManagmentCtrl.test)

module.exports = router;