import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// ACTION
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOK';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/S9MVnP6pcqoqluhhvN3X/books';

const books = [];

// ACTION CREATORS
export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book) => {
    await axios.post(URL, {
      item_id: book.id,
      title: book.title,
      author: book.author,
      category: book.category,
    });
    return {
      book: [
        book.id,
        [{
          author: book.author,
          title: book.title,
          category: book.category,
        }],
      ],
    };
  },
);

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await axios.delete(`${URL}/${id}`);
  return { id };
});

// REDUCER
const bookReducer = (state = books, action) => {
  switch (action.type) {
    case `${FETCH_BOOKS}/fulfilled`:
      return action.payload.books;
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload.book];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book[0] !== action.payload.id);
    default:
      return state;
  }
};

export const fetchBooks = createAsyncThunk(
  FETCH_BOOKS,
  async () => {
    const { data } = await axios.get(URL);
    return { books: Object.entries(data) };
  },
);

export default bookReducer;
