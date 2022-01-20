import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';
import LandingPage from '../components/landingpage/LandingPage';

function AllRoutes() {
  return  (
  <div>

      <Router>
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={LandingPage} />
      </Router>

      
      
  </div>
  )
}

export default AllRoutes;
