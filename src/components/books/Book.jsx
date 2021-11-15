import React from "react";
import "./book.scss";
const Book = ({ book, onUpdateShelf }) => {
  return (
    <div className="book-view">
      <div>
        <div>
          <img alt="" src={book.imageLinks.smallThumbnail} />
        </div>
        <div className="title">
          <div style={{ fontWeight: "bold" }}>{book.title}</div>
          <div
            style={{
              fontStyle: "oblique",
              fontWeight: "bold",
              color: "rgba(17, 16, 16, 0.700)",
            }}
          >
            {book.authors ? book.authors.join(", ") : "No authors"}
          </div>
        </div>
        <div>
          <select
            value={book.shelf}
            onChange={(e) => onUpdateShelf(book, e.target.value)}
          >
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Book;
