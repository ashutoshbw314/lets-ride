import React from "react";
import { useAuth } from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

function NavBar(props) {
  const auth = useAuth();

  return (
    <nav>
      <Link to='/'>Home</Link>
      <p>{auth.user ? auth.user.displayName : 'Username'}</p>
      <button onClick={() => auth.signOut()}>Signout</button>
    </nav>
  );
}

export default NavBar;

