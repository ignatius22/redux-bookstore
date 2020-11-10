import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: categories[0],
    };
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
}

// const BookForm = () => {
//   const categories = [
//     'Action',
//     'Biography',
//     'History',
//     'Horror',
//     'Kids',
//     'Learning',
//     'Sci-Fi'
//   ];
//   return (
//     <form>
//       <label htmlFor="title">
//         Title
//         <input id="title" type="text" name="title" />
//       </label>
//       <select id="category">
//         {categories.map(e => <option key={e} value={e}>{e}</option>)}
//       </select>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

export default BookForm;
