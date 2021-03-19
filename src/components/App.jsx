import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProvideAuth } from '../hooks/useAuth';
import PrivateRoute from '../routes/PrivateRoute';
import ReversedPrivateRoute from '../routes/ReversedPrivateRoute';
import SignIn from './pages/SignIn';


function App() {
  return (
    <ProvideAuth>
      <Router>
        <Route path='/login' component={SignIn} />
      </Router>
    </ProvideAuth>
  )
}

export default App;
