import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';
import ProtectedRoute from './components/ProtectedRoute';

import './App.css';

function App() {
  return (
      <div className="App">
        <h1>Auth</h1>
        <Link to='/login'>Login</Link><br/>
        <Link to='/friends'>Friends</Link>
        <Switch>
          <ProtectedRoute path='/friends' component={Friends} />
          <Route path='/login' component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
  );
}

export default App;