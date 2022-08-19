/* eslint-disable react/prop-types */
function Books({ title, author }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
  );
}

export default Books;
