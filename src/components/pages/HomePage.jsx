import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NavBar from '../sections/NavBar.jsx';
import rides from '../../data/rides';

function HomePage() {
  const auth = useAuth();
  const history = useHistory();

  return (
    <div>
      <NavBar />
      <ul>
        {
          rides.map((ride, i) => 
            <li key={i}><Link to={'/' + ride.vehicle}>{ride.vehicle}</Link></li> 
          )
        }
      </ul>
    </div>
  );
}

export default HomePage;
