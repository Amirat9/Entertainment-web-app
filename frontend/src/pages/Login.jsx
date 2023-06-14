import React from 'react';
import SigninForm from '../components/form/SigninForm';
import logo from '../assets/logo.svg';

const Login = () => {
  return (
    <section className='px-6 pt-12 mx-auto max-w-[400px] sm:pt-20'>
      <div className='flex items-center justify-center mb-[58px]'>
        <img
          src={logo}
          alt='Logo'
        />
      </div>
      <div className='flex flex-col bg-semiDarkBlue px-6 pt-6 pb-8 rounded-[10px]'>
        <h1 className='mb-10'>Login</h1>
        <SigninForm />
        <div className='flex items-center justify-center'>
          <p className='body-m'>
            Don't have an account? <span className='text-red'>Sign Up</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
