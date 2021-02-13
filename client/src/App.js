import './App.css';
import Login from './components/login.js';
import SignUp from './components/signup.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hatchways Messenger</h1>
      </div>
      <Router>
        <div>
          <nav>
            <Link to="/">
              <Button className="mx-2">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="mx-2">Sign Up</Button>
            </Link>
          </nav>

          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
