const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/customer', customerController.addCustomer);

module.exports = router;
