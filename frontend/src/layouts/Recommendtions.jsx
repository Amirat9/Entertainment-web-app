import React from 'react';
import useBackendData from '../hooks/useBackendData';
import Thumbnail from '../components/thumbnail/Thumbnail';

const Recommendtions = ({ heading, url, isMovie }) => {
  const { data, isLoading, isError } = useBackendData(url);

  return (
    <section className='flex flex-col gap-6 p-4'>
      {/* Title */}
      <h5 className='text-white text-xl font-light leading-[25px] tracking-[-0.3125px]'>
        {heading}
      </h5>
      {/* Thumbnails list */}
      <div className='grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3'>
        {data?.map((item) => (
          <Thumbnail
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default Recommendtions;
