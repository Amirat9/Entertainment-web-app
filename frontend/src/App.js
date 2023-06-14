import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Bookmark from './pages/Bookmark';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/signup'
          element={<Signup />}
        />
        <Route
          path='/movies'
          element={<Movies />}
        />
        <Route
          path='/tv-series'
          element={<TvSeries />}
        />
        <Route
          path='/bookmarked'
          element={<Bookmark />}
        />
      </Routes>
    </Router>
  );
}

export default App;
