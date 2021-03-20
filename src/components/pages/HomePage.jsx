import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from '../sections/NavBar';
import RideCard from '../sections/RideCard';
import rides from '../../data/rides';

function HomePage() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div>
      <NavBar />
      <div className='max-w-md px-8 py-8 mx-auto sm:max-w-xl lg:max-w-6xl lg:px-12'>
        <h2 className='text-3xl text-gray-100'>Available rides</h2>
        <p className='mt-3 text-xl text-white'>Choose a ride below to see more info:</p>
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
