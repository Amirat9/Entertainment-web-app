import React from 'react';
import SignupForm from '../components/form/SignupForm';
import logo from '../assets/logo.svg';

const Signup = () => {
  return (
    <section className='px-6 pt-12 mx-auto max-w-[400px] sm:pt-20'>
      <div className='flex items-center justify-center mb-[58px]'>
        <img
          src={logo}
          alt='Logo'
        />
      </div>
      <div className='flex flex-col bg-semiDarkBlue px-6 pt-6 pb-8 rounded-[10px]'>
        <h1 className='mb-10'>Sign Up</h1>
        <SignupForm />
        <div className='flex items-center justify-center'>
          <p className='body-m'>
            Already have an account? <span className='text-red'>Login</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
