import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../shared-components/NavBar/NavBar';
import rides from '../../data/rides';
import MyRide from './MyRide';


function RideNotFoundSection() {
  const {vehicle} = useParams();
  return (
    <div>
      <h1 className='py-4 m-8 text-3xl text-center text-gray-600 bg-pink-200 rounded-lg'>Sorry no rides available for {vehicle}</h1>
    </div>
  );
}

function RideDetail() {
  const {vehicle} = useParams();
  const rideAvailable = rides.map(ride => ride.vehicle).includes(vehicle);
  return (
    <div>
      <NavBar />
      {rideAvailable ? <MyRide vehicle={vehicle}/> : <RideNotFoundSection />}
    </div>
  )
}

export default RideDetail;
