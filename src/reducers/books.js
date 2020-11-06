import { ADD_BOOK } from '../actions/index';

const initialState = {
  id: 1,
  title: 'a title',
  category: 'nice book',
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        id: state.title,
        title: state.title,
        category: state.category,

      };
    default:
      return state;
  }
};

export default bookReducer;
