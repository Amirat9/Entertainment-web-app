import React, { useState } from 'react';
import PlayOverlay from './PlayOverlay';
import Content from './Content';
import BookmarkEmptyIcon from '../../assets/icon-bookmark-empty.svg';
import BookmarkFullIcon from '../../assets/icon-bookmark-full.svg';

const Thumbnail = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [hovered, setHovered] = useState(false);
  let isMovie = false;

  if (props.hasOwnProperty('title')) {
    isMovie = true;
  }

  const handleMouseEnter = (e) => {
    setHovered(true);
  };
  const handleMouseLeave = (e) => {
    setHovered(false);
  };

  const handleBookmarkClick = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    // Thumbnail
    <div className='w-[164px] sm:w-[220px] lg:w-[260px] lg'>
      <div
        className='flex relative w-[164px] max-h-[110px] sm:w-[220px] sm:max-h-[140px] lg:w-[260px] 2xl:w-[280px] md:max-h-[174px] rounded-lg'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main Picture */}
        <img
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          alt='Thumbnail'
          className='rounded-lg h-auto w-full'
        />
        {/* Play overlay */}
        <PlayOverlay hovered={hovered} />
        {/* Bookmarked Icon */}
        <div
          className='absolute flex items-center justify-center top-2 right-2 w-8 h-8 bg-darkBlue rounded-full z-30 opacity-50 cursor-pointer'
          onClick={handleBookmarkClick}
        >
          {isBookmarked ? (
            <img
              src={BookmarkFullIcon}
              alt='Bookmark icon'
            />
          ) : (
            <img
              src={BookmarkEmptyIcon}
              alt='Bookmark icon'
            />
          )}
        </div>
      </div>
      {/* Thumbnail Content */}
      {isMovie ? (
        <Content
          isMovie={isMovie}
          title={props.title}
          year={props.release_date}
          rate={props.vote_average}
        />
      ) : (
        <Content
          isMovie={isMovie}
          title={props.name}
          year={props.first_air_date}
          rate={props.vote_average}
        />
      )}
    </div>
  );
};

export default Thumbnail;
