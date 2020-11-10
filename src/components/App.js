import React from 'react';
import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
