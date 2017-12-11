import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div id="top">
          <div className="container">
            <div className="col-md-6 offer" data-animate="fadeInDown">
              <a href="/" className="btn btn-success btn-sm">Offer of the day</a>
            </div>
            <div className="col-md-6" data-animate="fadeInDown">
              <ul className="menu">
                <li><a href="/" data-toggle="modal" data-target="#login-modal">Login</a>
                </li>
                <li>
                  <NavLink to="/">
                    <FormattedMessage {...messages.home} />
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/user"
                    activeClassName="active"
                  >
                    <FormattedMessage {...messages.user} />
                  </NavLink>
                </li>
                <li><a href="/">Recently viewed</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
