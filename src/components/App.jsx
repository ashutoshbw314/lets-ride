import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { ProvideAuth } from '../hooks/useAuth';
import PrivateRoute from '../routes/PrivateRoute';
import ReversedPrivateRoute from '../routes/ReversedPrivateRoute';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import HomePage from './pages/HomePage';
import RideDetail from './pages/RideDetail';


function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <ReversedPrivateRoute exact path='/login'>
            <SignIn /> 
          </ReversedPrivateRoute>
          <Route exact path='/signup' component={SignUp} />
          <PrivateRoute exact path='/rides/:vehicle'>
            <RideDetail />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default App;
