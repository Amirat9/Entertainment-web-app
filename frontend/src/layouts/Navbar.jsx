import React from 'react';
import Logo from '../assets/logo.svg';
import Avatar from '../assets/image-avatar.png';
import HomeIcon from '../assets/icon-nav-home.svg';
import MovieIcon from '../assets/icon-nav-movies.svg';
import TvSeriesIcon from '../assets/icon-nav-tv-series.svg';
import BookmarkIcon from '../assets/icon-nav-bookmark.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='p-4 bg-semiDarkBlue min-w-full sm:rounded-[10px] lg:rounded-[20px]'>
      <div className='container flex lg:flex-col items-center justify-between min-w-full lg:min-h-full'>
        <div className='lg:mb-20'>
          <Link to={'/'}>
            <img
              src={Logo}
              alt='logo'
              className='w-[25px] h-[20px] sm:w-8 sm:h-[25.6px]'
            />
          </Link>
        </div>
        <div className='lg:mb-[520px]'>
          <ul className='flex items-center lg:flex-col justify-center gap-6'>
            <li className='cursor-pointer'>
              <Link to={'/'}>
                <img
                  src={HomeIcon}
                  alt='home'
                  className='w-4 h-4 sm:w-5 sm:h-5'
                />
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link to={'/movies'}>
                <img
                  src={MovieIcon}
                  alt='movie'
                  className='w-4 h-4 sm:w-5 sm:h-5'
                />
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link to={'/tv-series'}>
                <img
                  src={TvSeriesIcon}
                  alt='tv series'
                  className='w-4 h-4 sm:w-5 sm:h-5'
                />
              </Link>
            </li>
            <li className='cursor-pointer'>
              <img
                src={BookmarkIcon}
                alt='bookmark'
                className='w-4 h-4 sm:w-5 sm:h-5'
              />
            </li>
          </ul>
        </div>
        <div className='cursor-pointer'>
          <img
            src={Avatar}
            alt='avatar'
            className='w-6 h-6 rounded-full sm:w-8 sm:h-8 md:w-10 md:h-10'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
