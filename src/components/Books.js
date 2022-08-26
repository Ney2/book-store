// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import '../index.css';
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
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>{category}</p>
      <div className="progress">
        <CircularProgressbar
          style={{ width: 65, height: 65 }}
          value={progress}
          text={`${progress}%`}
        />
        Completed
      </div>
      <p>
        <span>Chapter </span>
        {chapter}
      </p>
      <button type="button" onClick={remove}>Remove</button>
    </div>
  );
}

export default Books;
