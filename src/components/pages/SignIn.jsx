import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import googleLogo from '../../images/google-logo.svg';

function SignIn(props) {
  const schema = yup.object().shape({
    email: yup.
      string().
      trim().
      email('Invalid email format').
      required('Email is a required field'),
    password: yup.
      string().
      required('Password is a required field').
      matches(
        /^[^\s]{6,}$/, 
        'Password must be composed of at least 6 non blank characters'
      )
  });

  const {register, handleSubmit, errors} = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const auth = useAuth();

  const onSubmit = async data => {
    try {
      await auth.signIn(data.email, data.password);
    } catch (error) {
      console.log(error.message)
    }
  };

  const socialSignIn = async medium => {
    try {
      await auth.socialSignIn(medium);
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='px-6 py-8 bg-white rounded-lg shadow sm:px-10'>
          <h1 className='mb-5 text-2xl font-bold text-indigo-600'>Login</h1>
          <form 
            className='mb-0 space-y-3'
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className='block'>
              <span className='text-sm font-medium text-gray-700'>Email Address</span>
              <input 
                className=''
                name="email"
                ref={register}
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <p className='px-2 text-sm text-red-500'>{errors.email.message}</p>}
            </label>
            <label className='block'>
              <span className='text-sm font-medium text-gray-700'>Password</span>
              <input
                className=''
                name="password"
                ref={register}
                type="password"
                placeholder="Enter your password"
              />
              {errors.password && <p className='px-2 text-sm text-red-500'>{errors.password.message}</p>}
            </label>
            <label className='flex items-center cursor-pointer'>
              <input
                className='' 
                type='checkbox' 
              />
              <span className='ml-2 text-sm text-gray-900'>I agree to <Link to='/terms' className='text-indigo-600 hover:text-indigo-500'>Terms</Link> and <Link className='text-indigo-600 hover:text-indigo-500' to='/policy'>Privacy Policy.</Link></span>
            </label>
            <div className='flex items-baseline justify-between'>
              <label className='flex items-center cursor-pointer'>
                <input
                  className='' 
                  type='checkbox' 
                />
                <span className='ml-2 text-sm text-gray-900'>Remember me</span>
              </label>
              <Link to='/forgot-password' className='text-sm hover:underline'>Forgot password?</Link>
            </div>
            <input
              className='inline-block py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-600 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-semibold text-sm text-white shadow sm:text-base cursor-pointer w-full'
              type='submit'
              value='Login'/>
            <p className='text-center'>
              <span className='text-sm'>Dont have an account?</span> <Link className='ml-3 hover:underline' to='/signup'>Create an account</Link>
            </p>
          </form>
        </div>
        <div className='flex items-center justify-center w-full my-3'>
          <hr className='inline-block w-full ml-12 mr-1 border-gray-300'/>
          <span>Or</span>
          <hr className='inline-block w-full ml-1 mr-12 border-gray-300' />
        </div>
        <div 
          className='block py-1 rounded-full transform transition border border-indigo-300  hover:bg-gray-100 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 tracking-wider text-sm text-gray-700 shadow cursor-pointer w-3/4 mx-auto text-sm flex items-center justify-between font-semibold'
          onClick={() => socialSignIn('google')}
        >
          <img className='ml-1 justify-self-start w-9' src={googleLogo} alt='google logo' />
          <p className='w-full text-center'>Continue with Google</p>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

