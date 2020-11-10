// import Book from "../components/Book";

export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = book => ({
  type: CREATE_BOOK,
  id: book.id,
  title: book.title,
  category: book.category,
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  id: book.id,
});
