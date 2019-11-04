import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AllBeers from './components/AllBeers'
import Home from './components/Home'
import AddBeer from './components/AddBeer'
import SingleBeer from './components/SingleBeer'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <Link to="/all"><button className="btn btn-outline-primary">All Beers</button></Link>
            </div>
            <div className="col-sm">
              <Link to="/single"><button className="btn btn-outline-primary">One Beer</button></Link>
            </div>
            <div className="col-sm">
              <Link to="/add"><button className="btn btn-outline-primary">Add a Beer</button></Link>
            </div>
          </div>
        </div>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/all">
            <AllBeers />
          </Route>
          <Route path="/single">
            <SingleBeer />
          </Route>
          <Route path="/add">
            <AddBeer />
          </Route>
        </Switch>
      </Router >
    )

  }
}

export default App;
