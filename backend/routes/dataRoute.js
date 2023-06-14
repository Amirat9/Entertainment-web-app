const express = require('express');
const router = express.Router();
const {
  getMovies,
  getTvSeries,
  getTrending,
} = require('../controllers/dataController');

router.get('/movies', getMovies);

router.get('/tv_series', getTvSeries);

router.get('/trending', getTrending);

module.exports = router;
