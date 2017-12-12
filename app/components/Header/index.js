import React from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => (
          <li className={match ? 'active' : ''}>
            <Link to={to}>{label}</Link></li>
      )}
      />
    );
    return (
      <div>
        <div id="top">
          <div className="container">
            <div className="col-md-6 offer" data-animate="fadeInDown">
            </div>
            <div className="col-md-6" data-animate="fadeInDown">
              <ul className="menu" style={{ borderRightColor: 'none' }}>
                <li>
                  <a>
                    Language:
                  </a>
                </li>
                <li>
                  <a>
                    <LocaleToggle />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar navbar-default yamm" role="navigation" id="navbar">
          <div className="container">
            <div className="navbar-header">

              <a className="navbar-brand home" href="index.html" data-animate-hover="bounce">

              </a>
              <div className="navbar-buttons">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation">
                  <span className="sr-only">Toggle navigation</span>
                  <i className="fa fa-align-justify"></i>
                </button>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#search">
                  <span className="sr-only">Toggle search</span>
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>

            <div className="navbar-collapse collapse" id="navigation">

              <ul className="nav navbar-nav navbar-left">
                <MenuLink activeOnlyWhenExact to="/" label={<FormattedMessage {...messages.home} />} />
                <MenuLink to="/features" label={<FormattedMessage {...messages.features} />} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
