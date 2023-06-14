const express = require('express');
const router = express.Router();
const {
  getBookmarks,
  createBookmark,
  deleteBookmark,
} = require('../controllers/bookmarkController');

router.get('/', getBookmarks);

router.post('/:id', createBookmark);

router.delete('/:id', deleteBookmark);

module.exports = router;
