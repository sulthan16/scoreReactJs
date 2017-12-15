/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import Blog from 'components/Blog';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectBeritaSuccess } from './selectors';
import { loadBerita } from './actions';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isAdd: false,
      isEdit: false,
      userListSelected: [],
    };
  }
  componentWillMount() {
    this.props.onLoadBerita();
  }

  render() {
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="score structure application homepage" />
        </Helmet>
        <div>
          {this.props.repoBeritaSuccess && <Blog data={this.props.repoBeritaSuccess.data} />}
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  repoBeritaSuccess: PropTypes.object,
  onLoadBerita: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadBerita: (val) => dispatch(loadBerita(val)),
  };
}

const mapStateToProps = createStructuredSelector({
  repoBeritaSuccess: makeSelectBeritaSuccess('loadBeritaSuccess'),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
