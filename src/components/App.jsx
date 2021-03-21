import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProvideAuth } from '../hooks/useAuth';
import PrivateRoute from '../routes/PrivateRoute';
import ReversedPrivateRoute from '../routes/ReversedPrivateRoute';
import SignInPage from './SignInPage/SignInPage';
import SignUpPage from './SignUpPage/SignUpPage';
import HomePage from './HomePage/HomePage';
import RideDetailPage from './RideDetailPage/RideDetailPage';
import Destination from './Destination/Destination';
import Contact from './Contact/Contact';
import Blog from './Blog/Blog';


function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/destination' component={Destination} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/contact' component={Contact} />
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
