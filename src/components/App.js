import React from 'react';
import '../index.css';
import BooksList from '../containers/BookList';
import BookForm from '../containers/BookForm';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <BooksList />
      <BookForm />
    </div>
  );
}

export default App;
