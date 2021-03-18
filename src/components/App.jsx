import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProvideAuth } from '../hooks/useAuth';
import PrivateRoute from '../routes/PrivateRoute';
import ReversedPrivateRoute from '../routes/ReversedPrivateRoute';


function App() {
  return (
    <ProvideAuth>
      <div>
        <h1 className="text-2xl text-center bg-blue-300"> Hello </h1>
      </div>

    </ProvideAuth>
  )
}

export default App
