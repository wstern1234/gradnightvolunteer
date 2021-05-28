import React from 'react';
import './App.css';
import Home from './pages/home/home';
import Map from './pages/nightMap/nightMap';
import Emergency from './pages/emergency/emergency';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends React.Component {
  render() {
    return (

      <div className = 'App'>

    <Router>
        <Switch>
          <Route path="/map">
            <Map />
          </Route>

          <Route path="/emergency">
            <Emergency />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>

      </div>

    );
  }
}

export default App;
