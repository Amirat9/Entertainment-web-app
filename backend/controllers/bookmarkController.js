const Bookmark = require('../models/movieBookmarkModel');
const asyncHandler = require('express-async-handler');

const getBookmarks = asyncHandler(async (req, res) => {
  const bookmarks = await Bookmark.find({ user: req.body.user._id });
  res.json(bookmarks.movieTitle);
});

const createBookmark = asyncHandler(async (req, res) => {});

const deleteBookmark = asyncHandler(async (req, res) => {});

module.exports = {
  getBookmarks,
  createBookmark,
  deleteBookmark,
};
