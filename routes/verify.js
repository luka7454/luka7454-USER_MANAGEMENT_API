const express = require('express');
const { verifyEmail } = require('../controllers/verifyController');

const router = express.Router();

router.get('/email', verifyEmail);

module.exports = router;
