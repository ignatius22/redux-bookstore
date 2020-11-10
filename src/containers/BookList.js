import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

function BooksList() {
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
          {BooksList.map(Book => <Book book={book} key={book.id} />)}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = state => ({
  books: state.books,
})

BooksList.PropTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default connect(mapStateToProps)(BooksList);
