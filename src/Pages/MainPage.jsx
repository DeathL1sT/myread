import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Section from "../components/section/Section";
import { Link } from "react-router-dom";
import "./mainpage.scss";

const MainPage = ({ books, onUpdateShelf }) => {
  return (
    <div className="main">
      <Header />
      <Section
        title="Currently Reading"
        books={books.filter((book) => book.shelf === "currentlyReading")}
        onUpdateShelf={onUpdateShelf}
      />
      <Section
        title="Want To Read"
        books={books.filter((book) => book.shelf === "wantToRead")}
        onUpdateShelf={onUpdateShelf}
      />
      <Section
        title="Read"
        books={books.filter((book) => book.shelf === "read")}
        onUpdateShelf={onUpdateShelf}
      />
      <Link style={{ color: "white", textDecoration: "none" }} to="/search">
        <button>+</button>
      </Link>
      <Footer />
    </div>
  );
};

export default MainPage;
