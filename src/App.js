import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Catagories from './components/Catagories';
import BookList from './components/BookList';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BookList />} />
          <Route path="/catagories" element={<Catagories />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
