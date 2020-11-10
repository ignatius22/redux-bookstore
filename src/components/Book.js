import React from 'react';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

// const mapStateToProps = state => ({
//   id: state.id,
//   title: state.title,
//   category: state.category,
// });

// Book.propTypes = {
//   title: PropTypes.string,
//   category: PropTypes.string,
//   id: PropTypes.string,
// };

// Book.defaultProps = {
//   title: '',
//   category: '',
//   id: '',
// };

// export default connect(mapStateToProps)(Book);

Book.PropTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired
};

export default Book;
