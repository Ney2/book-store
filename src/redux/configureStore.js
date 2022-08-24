import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './catagories/catagories';

const rootReducer = combineReducers({
  books: bookReducer,
  category: categoryReducer,
});

export default configureStore({
  reducer: rootReducer,
});
