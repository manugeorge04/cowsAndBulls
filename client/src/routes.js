import React, { Fragment, Suspense } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';


const Home = React.lazy(() => import('./pages/Home'));
const Join = React.lazy(() => import('./pages/Join')); 
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Header = React.lazy(() =>import('./hoc/Header'));
const Footer = React.lazy(() =>import('./hoc/Footer'));

const Routes = () => {
  return (
    <Fragment>
      <Suspense fallback={<CircularProgress />}>
      <Header />
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/join" component={Join} />
            <Route status={404} exact component={NotFound}/>
          </Switch>
        </HashRouter>
        <Footer />
      </Suspense>
    </Fragment>
  )
};

export default Routes;