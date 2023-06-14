import React from 'react';
import Button from '../UI/Button';

const SignupForm = () => {
  return (
    <form className='flex flex-col mb-6'>
      <input
        type='email'
        name='email'
        id='email'
        placeholder='Email address'
        className='mb-6 pl-4 pb-[18px] bg-semiDarkBlue text-white border-b border-greyishBlue '
      />
      <input
        type='password'
        name='password'
        id='password'
        placeholder='Password'
        className='mb-6 pl-4 pb-[18px] bg-semiDarkBlue text-white border-b border-greyishBlue '
      />
      <input
        type='password2'
        name='password2'
        id='password2'
        placeholder='Repeat password'
        className='mb-10 pl-4 pb-[18px] bg-semiDarkBlue text-white border-b border-greyishBlue '
      />
      <Button>Create an account</Button>
    </form>
  );
};

export default SignupForm;
