import React from 'react';
import MovieCategory from '../../assets/icon-category-movie.svg';
import TVCategory from '../../assets/icon-category-tv.svg';
import { FaCircle } from 'react-icons/fa';

const Content = ({ isMovie, year, rate, title }) => {
  const unformatedYear = new Date(year);
  const formatedYear = unformatedYear.getFullYear();
  return (
    <div className='flex flex-col gap-1 mt-2'>
      {/* Detials */}
      <div className='flex items-center gap-[6px] text-white text-[11px] font-light leading-[14px] opacity-75'>
        <div>{formatedYear}</div>
        <FaCircle
          className='inline-block '
          size='3px'
        />
        <div className='flex items-center gap-1'>
          {isMovie ? (
            <>
              <img
                src={MovieCategory}
                alt=''
                className='inline-block '
              />
              <span>Movie</span>
            </>
          ) : (
            <>
              <img
                src={TVCategory}
                alt=''
                className='inline-block '
              />
              <span>TV Show</span>
            </>
          )}
        </div>
        <FaCircle
          className='inline-block'
          size='3px'
        />
        <div>{rate.toFixed(1)}</div>
      </div>
      {/* Title */}
      <h4>{title}</h4>
    </div>
  );
};

export default Content;
