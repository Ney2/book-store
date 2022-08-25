/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Books from './Books';
import Form from './Form';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <div className="books-holder">
        {books.map((book) => <Books key={book.id} id={book.id} title={book.title} author={book.author} progress={book.progress} chapter={book.chapter} genre={book.genre} />)}
      </div>
      <Form />
    </div>
  );
}

export default BookList;
