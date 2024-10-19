const express = require('express');
const { createUser, getUserDetails } = require('../controllers/userController');
const router = express.Router();

router.post('/register', createUser);
router.get('/:id', getUserDetails);

module.exports = router;
