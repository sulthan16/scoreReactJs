import React from 'react';
// import { FormattedMessage } from 'react-intl';

// import A from 'components/A';
import LocaleToggle from 'containers/LocaleToggle';
// import Wrapper from './Wrapper';
// import messages from './messages';

function Footer() {
  return (
    <div>
      <div id="footer" data-animate="fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <h4>Pages</h4>

              <ul>
                <li><a href="text.html">About us</a>
                </li>
                <li><a href="text.html">Terms and conditions</a>
                </li>
                <li><a href="faq.html">FAQ</a>
                </li>
                <li><a href="contact.html">Contact us</a>
                </li>
              </ul>

              <hr className="hidden-md hidden-lg hidden-sm" />

            </div>
            <div className="col-md-3 col-sm-6">
              <h4>User section</h4>

              <ul>
                <li><a href="" data-toggle="modal" data-target="#login-modal">Login</a>
                </li>
                <li><a href="register.html">Regiter</a>
                </li>
              </ul>

              <hr className="hidden-md hidden-lg" />

            </div>
            <div className="col-md-3 col-sm-6">

              <h4>Where to find us</h4>
              <ul>
                <li>
                  <a>Kalibata city, South Jakarta Region, Indonesia</a>
                </li>
              </ul>

              <a href="contact.html">Go to contact page</a>

              <hr className="hidden-md hidden-lg" />

            </div>


            <div className="col-md-3 col-sm-6">

              <h4>Languagge</h4>
              <ul>
                <li>
                  <a><LocaleToggle /></a>
                </li>
              </ul>

              <h4>&nbsp;</h4>
              <hr />
              <p className="social">
                <a href="" className="facebook external" data-animate-hover="shake"><i className="fa fa-facebook"></i></a>
                <a href="" className="twitter external" data-animate-hover="shake"><i className="fa fa-twitter"></i></a>
                <a href="" className="instagram external" data-animate-hover="shake"><i className="fa fa-instagram"></i></a>
                <a href="" className="gplus external" data-animate-hover="shake"><i className="fa fa-google-plus"></i></a>
                <a href="" className="email external" data-animate-hover="shake"><i className="fa fa-envelope"></i></a>
              </p>


            </div>
          </div>
        </div>
      </div>
      <div id="copyright">
        <div className="container">
          <div className="col-md-6">
            <p className="pull-left">© 2017 score structure.</p>

          </div>
          <div className="col-md-6">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
