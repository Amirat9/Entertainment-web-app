const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// @Desc  Register a new user
// @Route POST /api/users
// @Access Public
router.post('/', registerUser);

// @Desc  Login a user
// @Route POST /api/users/login
// @Access Public
router.post('/login', loginUser);

module.exports = router;
