import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Dashboard from './components/dashboard/Dashboard'


function App() {
  return (
      <Router>
        <div>
          {/* <ul>
            <li>
              <Link to="/login">Public Page</Link>
            </li>
            <li>
              <Link to="/dashboard">Protected Page</Link>
            </li>
          </ul> */}

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
