import React from 'react';

const Button = ({ children }) => {
  return (
    <button className=' bg-red py-[14px] px-[67.5] rounded-md'>
      <p className='body-m'>{children}</p>
    </button>
  );
};

export default Button;
