import { v4 as uuidv4 } from 'uuid';
// ACTION
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const books = [
  {
    id: uuidv4(),
    title: 'Animal Farm',
    author: 'George Orwell',
    progress: 64,
    chapter: 17,
    genre: 'Animal Fable',
  },

  {
    id: uuidv4(),
    title: 'The Great Gatsby',
    author: 'F.Scott Fitzgerald',
    progress: 5,
    chapter: 17,
    genre: 'Tragedy',
  },
  {
    id: uuidv4(),
    title: 'Rich Dad Poor Dad',
    author: 'Robert T.Kiyosaki',
    progress: 20,
    chapter: 17,
    genre: 'Personal finance',
  },
  {
    id: uuidv4(),
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    progress: 70,
    chapter: 17,
    genre: 'Quest, Adventure, Fantasy',
  },
];

// ACTION CREATORS
export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  data: id,
});

// REDUCER
const bookReducer = (state = books, action) => {
  const index = state.findIndex((books) => books.id === action.data);
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
};

export default bookReducer;
