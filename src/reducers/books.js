import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

// const initialState = {
//   id: 1,
//   title: 'a title',
//   category: 'nice book',
// };

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_BOOK:
//       return {
//         ...state,
//         id: state.title,
//         title: state.title,
//         category: state.category,

//       };
//     default:
//       return state;
//   }
// };

// export default bookReducer;

const books = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          category: action.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
