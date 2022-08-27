import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { checkStatus } from '../redux/catagories/catagories';

const Books = () => {
  const myCategories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  return (
    <div className="text-center">
      <button type="submit" className="m-5 btn btn-primary catagories" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h3 className="text-center msg">{myCategories}</h3>
    </div>
  );
};

export default Books;
