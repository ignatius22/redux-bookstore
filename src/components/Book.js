import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Book = ({ title, category, id }) => (

  <div>
    <h1>{title}</h1>
    <p>{category}</p>
    <p>{id}</p>
  </div>
);

const mapStateToProps = state => ({
  id: state.id,
  title: state.title,
  category: state.category,
});

Book.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  category: '',
  id: '',
};

export default connect(mapStateToProps)(Book);
