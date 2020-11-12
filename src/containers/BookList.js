import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, filterBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

function BooksList({
  books, filter, removeBook, filterBook,
}) {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = e => {
    filterBook(e.target.value);
  };

  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
          books.filter(book => (filter === 'All' ? books : book.category === filter))
            .map(book => (
              <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
            ))
        }
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(removeBook(book));
  },
  filterBook: category => {
    dispatch(filterBook(category));
  },
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  filterBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
