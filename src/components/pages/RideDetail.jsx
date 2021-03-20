import React from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../sections/NavBar';
import rides from '../../data/rides';
import NotFoundSection from '../sections/NotFoundSection';

function MyRide() {
  const {vehicle} = useParams();
  return (
    <h1>vehicle: {vehicle} woww</h1>
  )
}

function RideDetail() {
  const {vehicle} = useParams();
  const rideAvailable = rides.map(ride => ride.vehicle).includes(vehicle);
  return (
    <div>
      <NavBar />
      {rideAvailable ? <MyRide /> : <NotFoundSection />}
    </div>
  )
}

export default RideDetail;


