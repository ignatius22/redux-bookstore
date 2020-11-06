import React from 'react';

function BooksList() {
  return (
    <div>
      <table>
        <tr>
          <th>Book ID</th>
          <th>title</th>
          <th>category</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Smith</td>
          <td>fiction</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jackson</td>
          <td>biography</td>
        </tr>
      </table>
    </div>
  );
}

export default BooksList;
