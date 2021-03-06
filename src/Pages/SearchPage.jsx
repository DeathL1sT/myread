import React, { useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import "./search.scss";
import Section from "../components/section/Section";
const SearchPage = ({ books, onUpdateShelf }) => {
  const [bookSearch, setBookSearch] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handelChangeShelf = (book, shelf) => {
    onUpdateShelf(book, shelf);
    setBookSearch(
      bookSearch.map((b) => (b.id === book.id ? { ...book, shelf } : b))
    );
  };

  const handleChangeText = async (e) => {
    setSearchText(e.target.value);

    try {
      const data = await search(e.target.value);

      if (data === undefined) {
        setBookSearch([]);
        return;
      }

      setBookSearch(
        data.map((book) => {
          const selectedBook = books.find((b) => b.id === book.id);
          book.shelf = selectedBook ? selectedBook.shelf : "none";
          return book;
        })
      );
    } catch {
      setBookSearch([]);
    }
  };

  return (
    <div className="search">
      <input
        placeholder="Search by title or author"
        type="text"
        value={searchText}
        onChange={handleChangeText}
      ></input>
      <div className="section">
        <Section
          title="Search Results"
          books={bookSearch}
          onUpdateShelf={handelChangeShelf}
        />
      </div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default SearchPage;
