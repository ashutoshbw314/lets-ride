import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProvideAuth } from '../hooks/useAuth';
import PrivateRoute from '../routes/PrivateRoute';
import ReversedPrivateRoute from '../routes/ReversedPrivateRoute';
import SignInPage from './SignInPage/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import HomePage from './HomePage/HomePage';
import RideDetailPage from './RideDetailPage/RideDetailPage';


function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <ReversedPrivateRoute exact path='/login'>
            <SignInPage /> 
          </ReversedPrivateRoute>
          <Route exact path='/signup' component={SignUpPage} />
          <PrivateRoute exact path='/rides/:vehicle'>
            <RideDetailPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default App;
