const moongose = require('mongoose');

const movieBookmarkSchema = moongose.Schema({
  userId: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  movieTitle: [
    {
      type: String,
      titleID: Number,
      required: true,
    },
  ],
  bookmarkedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = moongose.model('MovieBookmark', movieBookmarkSchema);
