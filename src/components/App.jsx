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
        <Switch>
          <Route exact path='/'>
            <h1>hello Home page</h1>
          </Route>
          <Route path='/login' component={SignIn} />
        </Switch>
      </Router>
    </ProvideAuth>
  )
}

export default App;
