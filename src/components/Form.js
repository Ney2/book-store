import React from 'react';

const Form = () => (
  <div className="form-container">
    <h3>Add New Book</h3>
    <form className="form">
      <input className="title" placeholder="Book Title" required />
      <input className="author" placeholder="Author Name" required />
      <button type="submit" className="add-book">Add Book</button>
    </form>
  </div>
);

export default Form;
