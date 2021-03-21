import React from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import userLogo from '/img/logos/user.svg';
import brandLogo from '/img/logos/brand-logo.svg';
import { useHistory } from 'react-router-dom';

function NavBar(props) {
  const auth = useAuth();
  const history = useHistory();

  const handleLogging = () => {
    if (auth.user) {
      auth.signOut();
    } else {
      history.push('/login'); 
    }
  }

  return (
    <div className=''>
      <header className='flex flex-wrap items-center px-6 py-2 bg-white bg-opacity-80 lg:px-6 lg:py-0'>
        <div className='flex items-center justify-between flex-1'>
          <Link to='/'>
            <img src={brandLogo} className='w-12 py-1' />
          </Link>
        </div>

        <label className='block cursor-pointer lg:hidden'>
          <svg className='text-gray-900 fill-current' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><title>menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path></svg>
          <input className='hidden' type='checkbox'/>
        </label>

        <div className='hidden w-full lg:flex lg:items-center lg:w-auto'>
          <nav>
            <ul className='items-center justify-between text-base text-gray-800 lg:flex lg:pt-0'>
              <li><Link className='block px-0 py-3 border-b-2 border-transparent lg:px-4 lg:py-2 hover:border-green-800' to='/'>Home</Link></li>
              <li><Link className='block px-0 py-3 border-b-2 border-transparent lg:px-4 lg:py-2 hover:border-green-800' to='/destination'>Destination</Link></li>
              <li><Link className='block px-0 py-3 border-b-2 border-transparent lg:px-4 lg:py-2 hover:border-green-800' to='/blog'>Blog</Link></li>
              <li><Link className='block px-0 py-3 mb-2 border-b-2 border-transparent lg:py-2 lg:px-4 hover:border-green-800 lg:mb-0' to='/contact'>Contact</Link></li>
            </ul>
          </nav>
          {
            auth?.user &&
            <div className='flex items-center justify-start mb-4 lg:ml-4 lg:mb-0 pointer-cursor'>
              <Link to='/'>
                <img className='w-10 h-10 border-2 border-transparent rounded-full hover:border-indigo-400' src={auth.user.photoURL || userLogo} alt='User Photo'/>
              </Link>
              <p className='text-base text-gray-700'>{auth.user ? auth.user.displayName : ''}</p>
            </div>
          }
          <button className='px-4 py-2 mx-2 rounded-full transform transition  hover:bg-indigo-500 hover:text-white hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 tracking-wider text-gray-700 cursor-pointer' onClick={handleLogging}>
            {
              auth?.user ? 'Logout' : 'Login'
            }
          </button>   
        </div>
      </header>
    </div>
  );
}

export default NavBar;

