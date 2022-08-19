/* eslint-disable max-len */
import { React, useState } from 'react';
import Books from './Books';
import Form from './Form';

function BookList() {
  const [books] = useState([{ id: '1', title: 'Animal Farm', author: 'George Orwell' }]);
  return (
    <>
      <div className="books-holder">
        {books.map((book) => <Books key={book.id} title={book.title} author={book.author} />)}
      </div>
      <Form />
    </>
  );
}

export default BookList;
