// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import './CSS/Book.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { removeBook } from '../redux/books/books';

/* eslint-disable react/prop-types */
function Books({
  id, title, author, category,
}) {
  const dispatch = useDispatch();
  const progress = Math.floor(Math.random() * 100);
  const chapter = Math.floor(Math.random() * 20);

  const remove = () => {
    dispatch(removeBook(id));
    swal('Done!', `${title} successfully removed`, 'success');
  };

  return (
    <div className="book-container">
      <div>
        <p>{category}</p>
        <h1>{title}</h1>
        <p>{author}</p>
        <button type="button" onClick={remove}>Comments</button>
        <button type="button" onClick={remove}>Remove</button>
        <button type="button" onClick={remove}>Edit</button>
      </div>
      <div className="progress">
        <CircularProgressbar
          style={{ width: 65, height: 65 }}
          value={progress}
        />
        <h1 className="percentage">
          {progress}
          %
        </h1>
        <p className="completed">Completed</p>
      </div>
      <div>
        <p>Current Chapter</p>
        <p>
          Chapter
          {' '}
          <span>{chapter}</span>
        </p>
        <button type="submit">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Books;
