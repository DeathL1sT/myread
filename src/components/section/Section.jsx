import React from "react";
import Book from "../books/Book";
import "./section.scss";
const Section = ({ onUpdateShelf, books, title }) => {
  const filteredBooks = books ? books.filter((book) => book.imageLinks) : [];

  return (
    <div className="section">
      <div className="title">
        <h2>{title}</h2>
      </div>

      <div className="content">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <Book key={book.id} book={book} onUpdateShelf={onUpdateShelf} />
          ))
        ) : (
          <p>No books to display</p>
        )}
      </div>
    </div>
  );
};

export default Section;
