// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="container-fluid bg-white border my-5 mx-5 p-3">
      <div className="row bg-white">
        <div className="col-6 bg-white">
          <p className="bg-white category">{category}</p>
          <h1 className="bg-white title">{title}</h1>
          <p className="bg-white author">{author}</p>
          <div className="bg-white list">
            <button type="button" className="bg-white btn">Comments</button>
            <button type="button" className="bg-white btn" onClick={remove}>Remove</button>
            <button type="button" className="bg-white btn">Edit</button>
          </div>
        </div>
        <div className="col-3 bg-white progress">
          <CircularProgressbar
            style={{ width: 65, height: 65 }}
            value={progress}
            className="col bg-white"
          />
          <h1 className="col bg-white percentage">
            {progress}
            %

          </h1>
          <p className="col bg-white fw-lighter fs-5 text-muted completed">Completed</p>
        </div>
        <div className="col-3 bg-white">
          <p className="bg-white current-chapter">CURRENT CHAPTER</p>
          <p className="bg-white chapter">
            Chapter
            {' '}
            <span className="bg-white">{chapter}</span>
          </p>
          <button type="submit" className="btn btn-primary update">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

export default Books;
