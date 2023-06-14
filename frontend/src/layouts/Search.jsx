import React, { useState } from 'react';
import SearchIcon from '../assets/icon-search.svg';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='flex items-center bg-transparent p-4'>
      <img
        src={SearchIcon}
        alt='Search Icon'
        className='w-[18px] h-[18px] sm:w-6 sm:h-6 '
      />
      <input
        type='text'
        value={searchTerm}
        onChange={handleChange}
        placeholder='Search for movies or TV series'
        className='font-light text-white caret-red text-2xl leading-5 w-full ml-4 sm:ml-6 bg-transparent opacity-50 cursor-pointer focus:opacity-100 focus:outline-none focus:border-b-[1px] focus:border-greyishBlue pb-1'
      />
    </div>
  );
};

export default Search;
