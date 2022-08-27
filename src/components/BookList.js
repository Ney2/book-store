/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { fetchBooks } from '../redux/books/books';
import Books from './Books';
import Form from './Form';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <div>
      <div className="books-holder">
        {books.map((book) => (
          <Books
            key={book[0]}
            id={book[0]}
            title={book[1][0].title}
            author={book[1][0].author}
            category={book[1][0].category}
          />
        ))}
      </div>
      <Form />
    </div>
  );
}

export default BookList;
