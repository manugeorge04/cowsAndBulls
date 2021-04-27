import React, { Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Join from './pages/Join';
import NotFound from './pages/NotFound';

import Header from './hoc/Header';

const Routes = () => {
  return (
    <Fragment>
      <Header/>
      <HashRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/join" component={Join} />
          <Route status={404} exact component={NotFound}/>
        </Switch>
      </HashRouter>
    </Fragment>
  )
};

export default Routes;