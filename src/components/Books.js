// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

/* eslint-disable react/prop-types */
function Books(props) {
  const dispatch = useDispatch();
  const {
    id, title, author, progress, genre, chapter,
  } = props;
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <p>
        <span>{progress}</span>
        % completed
      </p>
      <p>
        <span>Chapter </span>
        {chapter}
      </p>
      <p>{genre}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
}

// Books.propTypes = {
//   title: PropTypes.string.isRequired,
//   author: PropTypes.string.isRequired,
//   id: PropTypes.string.isRequired,
//   genre: PropTypes.string.isRequired,
//   chapter: PropTypes.number.isRequired,
//   progress: PropTypes.number.isRequired,
// };

export default Books;
