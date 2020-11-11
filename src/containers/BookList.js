import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, filterBook } from '../actions/index';

function BooksList({  books, removeBook, filterBook, filter, }) {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = e => {
  const category = e.target.value;
  filterBook(category);
};

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book => (
              <Book
                handleRemoveBook={handleRemoveBook}
                book={book}
                key={book.id}
              />
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
