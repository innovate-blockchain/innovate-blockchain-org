var express = require('express');
var router = express.Router();
var ContactUsConttroller = require('../controllers/contactus');
router.post('/',ContactUsConttroller.addContactUsForm);
router.get('/',ContactUsConttroller.getAllForms);
module.exports = router;