import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const newBook = (e) => {
    e.preventDefault();

    const book = {
      id: uuidv4(),
      title,
      author,
      progress: 10,
      chapter: 10,
      genre: 'adventure',
    };

    if (title.length && author.length) {
      dispatch(addBook(book));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="form-container">
      <h3>Add New Book</h3>
      <form className="form" onSubmit={newBook}>
        <input className="title" placeholder="Book Title" value={title} onChange={changeTitle} required />
        <input className="author" placeholder="Author Name" value={author} onChange={changeAuthor} required />
        <button type="submit" className="add-book">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
