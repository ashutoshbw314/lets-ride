import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';

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
              {false && errors.email && <span>{errors.email.message}</span>}<br />
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
              {false && errors.password && <span>{errors.password.message}</span>}<br />
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
              className='inline-block px-8 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-600 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 uppercase tracking-wider font-semibold text-sm text-white shadow sm:text-base cursor-pointer w-full'
              type='submit'
              value='Login'/>
            <p className='text-center'>
              <span className='text-sm'>Dont have an account?</span> <Link className='ml-3 hover:underline' to='/signup'>Create an account</Link>
            </p>
          </form>
        </div>
      </div>
      <hr />
      <button onClick={() => socialSignIn('google')}>Sign in with Google</button><br />
      <button onClick={() => socialSignIn('facebook')}>Sign in with Facebook</button><br />
    </div>
  );
}

export default SignIn;

