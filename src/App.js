import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import CreateTshirt from './components/CreateTshirt';
import Dashboard from './components/Dashboard'
import TshirtDetails from './components/products/TshirtDetails';
import Signupt from './components/forms/SignUp'
import SignIn from './components/forms/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={Dashboard} exact/>
          <Route path="/signup" component={Signupt}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/create" component={CreateTshirt}/>
          <Route path="/:id" component={TshirtDetails}/>
        </Switch>
        </Fragment>
      </Router>
       
    );
  }
}

export default App;
