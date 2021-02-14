import './App.css';
import Login from './components/login.js';
import SignUp from './components/signup.js';
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import useLocalStorage from './custom hooks/useLocalStorage'

function App() {
  const [ name, setName ] = useLocalStorage('name')

  return (
    name ? <Main name={name} /> : 
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
                <Login onNameSubmit={setName}/>
              </Route>
              <Route path="/signup">
                <SignUp />
              </Route>
              <Route path="/main">
                <Main />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
  );
}

export default App;
