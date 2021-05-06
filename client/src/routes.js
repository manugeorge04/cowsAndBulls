import React, { Fragment, Suspense, useContext, useEffect } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import MyContext from './context/MyContext';
import FallbackCircularProgress from './components/FallbackCircularProgress'

const Home = React.lazy(() => import('./pages/Home'));
const Join = React.lazy(() => import('./pages/Join')); 
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Header = React.lazy(() =>import('./hoc/Header'));
const Footer = React.lazy(() =>import('./hoc/Footer'));
const Cowputer = React.lazy(() => import('./pages/Cowputer'))

const Routes = () => {
  const { subHeader } = useContext(MyContext);  
  return (
    <Fragment>
      <Suspense fallback={<FallbackCircularProgress />}>
      {subHeader==='Error Page' || <Header />}
        <HashRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/join" component={Join} />            
            <Route path="/cowputer" component={Cowputer} />            
            <Route status={404} exact component={NotFound}/>
          </Switch>
        </HashRouter>
        <Footer />
      </Suspense>
    </Fragment>
  )
};

export default Routes;