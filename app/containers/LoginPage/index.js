import React from 'react';
// import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Img from 'components/Img';
// import { FormattedMessage } from 'react-intl';
import logoScore from 'images/aar32.png';
// import messages from './messages';
export class LoginPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="background-login">
        <div className="container">
          <div className="row vertical-offset-100">
            <div className="col-md-4 col-md-offset-4">
              <div className="box">
                <div className="box-header">
                  <h3 className="panel-title pull-left">
                    <Img src={logoScore} alt="Logo" />
                    score structure
                  </h3>
                </div>
                <div >
                  <form acceptCharset="UTF-8">
                    <fieldset>
                      <div className="form-group">
                        <input className="form-control" placeholder="E-mail" name="email" type="text" />
                      </div>
                      <div className="form-group">
                        <input className="form-control" placeholder="Password" name="password" type="password" value="" />
                      </div>
                      <div className="form-group">
                        <input name="remember" type="checkbox" value="Remember Me" /> Remember Me
                      </div>
                      <button className="btn btn-lg btn-success btn-block" type="submit"> Login</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
};

export function mapDispatchToProps() {
  return {
  };
}
const mapStateToProps = createStructuredSelector({
});


export default connect(mapStateToProps, mapStateToProps)(LoginPage);
