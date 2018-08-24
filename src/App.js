import React, { Component } from 'react';
import './App.css';
import Interface from './Interface.js';
import Help from './Help.js';
import Accomodation from './Accomodation.js';
import Clothing from './Clothing.js';
import Food from './Food.js';
import Medical from './Medical.js';
import Washing from './Washing.js';
import { Route, Switch, withRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <Switch>
        <Route exact path='/' component={Interface} />
        <Route exact path='/help' component={Help} />
        <Route exact path='/accomodation' component={Accomodation} />
        <Route exact path='/washing' component={Washing} />
        <Route exact path='/food' component={Food} />
        <Route exact path='/clothing' component={Clothing} />
        <Route exact path='/medical' component={Medical} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
