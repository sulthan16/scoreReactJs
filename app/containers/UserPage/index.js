import React from 'react';
// import PropTypes from 'prop-types';
// import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

export class UserPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

UserPage.propTypes = {
};

export function mapDispatchToProps() {
  return {
  };
}
const mapStateToProps = createStructuredSelector({
});


export default connect(mapStateToProps, mapStateToProps)(UserPage);
