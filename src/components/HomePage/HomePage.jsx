import React from "react";
import { Link } from 'react-router-dom';
import NavBar from '../shared-components/NavBar/NavBar';
import RideCard from './RideCard';
import rides from '../../data/rides';

function HomePage() {
  return (
    <div>
      <NavBar />
      <div className='max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12'>
        <h1 className='mb-5 text-5xl font-bold text-center text-white text-shadow-lg'>Let's Ride</h1>
        <h3 className='py-3 mb-4 text-2xl font-bold text-center text-white bg-blue-500 bg-opacity-70'>Tired of urban life? Book your escape below.</h3>
        <h2 className='text-3xl text-gray-100 text-shadow-xl'>Available rides</h2>
        <p className='mt-3 text-xl text-white'>Choose a vehicle below to see more info:</p>
        <div className='mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-4'>
          {
            rides.map((ride, i) => 
              <Link key={i} to={'/rides/' + ride.vehicle}>
                <RideCard ride={ride} />
              </Link>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;
