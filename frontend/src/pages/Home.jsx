import React from 'react';
import Navbar from '../layouts/Navbar';
import Search from '../layouts/Search';
import Recommendtions from '../layouts/Recommendtions';

const Home = () => {
  return (
    <section className='h-screen max-w-[1440px] mx-auto'>
      <div className='flex flex-col lg:flex-row container min-w-full sm:p-6 md:p-8'>
        <div className='lg:min-w-[96px]'>
          <Navbar />
        </div>
        <div className='lg:w-full lg:ml-9'>
          <Search />
          <Recommendtions
            url={'/api/data/trending'}
            isMovie={true}
            heading={'Recommended for you'}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
