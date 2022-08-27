import React from 'react';
import './CSS/Catagory.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../redux/catagories/catagories';

const Books = () => {
  const myCategories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div>
      <button type="submit" className="catagories" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h3 className="msg">{myCategories}</h3>
    </div>
  );
};

export default Books;
