import React from 'react';
import Play from '../../assets/icon-play.svg';

const PlayOverlay = ({ hovered }) => {
  return (
    <div
      className={
        hovered
          ? 'absolute bg-black opacity-50 inset-0 flex items-center justify-center mx-auto'
          : 'absolute bg-black opacity-50 inset-0 hidden items-center justify-center mx-auto'
      }
    >
      <div className='flex items-center text-white p-2 gap-[10px] bg-[rgba(255,255,255,0.25)] rounded-[28px]'>
        <img
          src={Play}
          alt='Play Icon'
        />
        <h4>Play</h4>
      </div>
    </div>
  );
};

export default PlayOverlay;
