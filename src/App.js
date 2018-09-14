import React from 'react';
import { Route } from 'react-router-dom';

import SearchPage from './SearchPage';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  getAllBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  componentDidMount() {
    this.getAllBooks();
  }

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    this.getAllBooks();
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <MainPage books={this.state.books} moveShelf={this.moveShelf} />
          )} />
        <Route path="/search" render={() => (
            <SearchPage books={this.state.books} moveShelf={this.moveShelf} />
          )} />
      </div>
    );
  }
}

export default BooksApp;
