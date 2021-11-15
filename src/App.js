import React, { useState, useEffect } from "react";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import MainPage from "./Pages/MainPage";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getAll().then((data) => setBooks(data));
  }, []);

  const onUpdateShelf = (book, shelf) => {
    update(book, shelf).then(() => {
      if (book.shelf === "none") {
        setBooks([...books, { ...book, shelf }]);
      } else if (shelf === "none") {
        setBooks(books.filter((b) => b.id !== book.id));
      } else {
        setBooks(books.map((b) => (b.id === book.id ? { ...b, shelf } : b)));
      }
    });
  };
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <MainPage books={books} onUpdateShelf={onUpdateShelf} />
        </Route>
        <Route path="/search">
          <SearchPage books={books} onUpdateShelf={onUpdateShelf} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
