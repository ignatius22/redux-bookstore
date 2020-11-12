import React from 'react';
import '../index.css';
import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bookstore CMS</h1>
        <p>BOOKS</p>
        <p>CATEGORIES</p>
      </header>
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
