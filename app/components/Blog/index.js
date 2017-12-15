import React from 'react';
import PropTypes from 'prop-types';

import Img from 'components/Img';
import { API_URL } from 'constants/app';

function Blog(props) {
  const listItems = props.data.map((key) =>
    (
      <div className="box clickable row" key={key.id_post.toString()}>
        <div className="col-md-3">
          <Img src={`${API_URL}/image/get/featured/thumbs/${key.thumbnail}`} alt="thumnail" />
        </div>
        <div className="col-md-9">
          <h3>{key.post_title}</h3>
          <p>{key.description}</p>
        </div>
      </div>)
  );
  return (
    <div>
      {listItems}
    </div>
  );
}
Blog.propTypes = {
  data: PropTypes.any,
};

export default Blog;
