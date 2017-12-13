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
import Img from 'components/Img';
import injectReducer from 'utils/injectReducer';
import { API_URL } from 'constants/app';
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
    this.props.onLoadBerita({});
  }

  render() {
    if (this.props.repoBeritaSuccess) {
      const list = this.props.repoBeritaSuccess.data;
      this.listItems = list.map((key) =>
        (<div className="box clickable row" key={key.id_post.toString()}>
          <div className="col-md-3 col-sm-3">
            <Img src={`${API_URL}/image/get/featured/thumbs/${key.thumbnail}`} alt="thumnail" />
          </div>
          <div className="col-md-9 col-sm-9">
            <h3>{key.post_title}</h3>
            <p>{key.description}</p>
          </div>
        </div>)
      );
    }
    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Boilerplate application homepage" />
        </Helmet>
        <div>
          {this.listItems}
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
