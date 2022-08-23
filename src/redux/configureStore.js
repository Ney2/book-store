import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './catagories/catagories';

const rootReducer = configureStore({
  books: bookReducer,
  category: categoryReducer,
});

export default rootReducer;
