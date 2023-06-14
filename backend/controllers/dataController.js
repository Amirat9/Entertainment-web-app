const axios = require('axios');
const asyncHandler = require('express-async-handler');

const getMovies = asyncHandler(async (req, res) => {
  let currentPage = 1;
  let allData = [];
  try {
    while (true) {
      const response = await axios.request({
        method: 'GET',
        url: `${process.env.API_URL}/movie/now_playing?language=en-US&page=${currentPage}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      });
      const data = response.data;
      allData = [...allData, ...data.results];
      if (currentPage >= 10) {
        break;
      }
      currentPage++;
    }
    res.status(200).json(allData);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const getTvSeries = asyncHandler(async (req, res) => {
  let currentPage = 1;
  let allData = [];
  try {
    while (true) {
      const response = await axios.request({
        method: 'GET',
        url: `${process.env.API_URL}/tv/top_rated?language=en-US&page=${currentPage}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      });
      const data = response.data;
      allData = [...allData, ...data.results];
      if (currentPage >= 10) {
        break;
      }
      currentPage++;
    }
    res.status(200).json(allData);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

const getTrending = asyncHandler(async (req, res) => {
  try {
    const response = await axios.request({
      method: 'GET',
      url: `${process.env.API_URL}/trending/all/week?language=en-US`,
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
    });
    const data = response.data.results;

    res.status(200).json(data);
  } catch (error) {
    res.status(500);
    throw new Error(error);
  }
});

module.exports = {
  getMovies,
  getTvSeries,
  getTrending,
};
