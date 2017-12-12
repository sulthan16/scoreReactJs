/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import UserPage from 'containers/UserPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';
const loggedIn = true;
const loggedInAdmin = false;
export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - SCore Structure"
        defaultTitle="SCore Structure"
      >
        <meta name="description" content="A React.js Boilerplate application with SCore Structure" />
      </Helmet>

      <Switch>
        <Route path="/user" component={loggedIn ? UserPage : HomePage} />
        <Route path="/authPage" component={loggedInAdmin ? UserPage : LoginPage} />
        <Route
          component={() =>
          (<div>
            <Header />
            <div className="container">
              <Route exact path="/" component={HomePage} />
              <Route path="/features" component={FeaturePage} />
            </div>
            <Footer />
          </div>)
        }
        />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </div>
  );
}
