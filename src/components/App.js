import React from 'react';
import BooksList from '../containers/BookList';
import Books from './Book';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <Books />
    </div>
  );
}

export default App;
