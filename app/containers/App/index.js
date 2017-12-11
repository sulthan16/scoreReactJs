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
const loggedIn = false;
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
        <Route
          exact
          path="/"
          render={() => (
          loggedIn ? (
            <UserPage />
          ) : (
            <HomePage />
          )
        )}
        />
        <Route
          exact
          path="/admin"
          render={() => (
          loggedIn ? (
            <FeaturePage />
          ) : (
            <HomePage />
          )
        )}
        />
      </Switch>
    </div>
  );
}
