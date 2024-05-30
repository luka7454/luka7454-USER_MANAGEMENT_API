const express = require('express');
const { getUserInfo, addProgram, getPrograms } = require('../controllers/exeController');

const router = express.Router();

router.get('/user/:id', getUserInfo);
router.post('/program', addProgram);
router.get('/programs/:userId', getPrograms);

module.exports = router;
