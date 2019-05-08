import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import BookDetails from '../components/BookDetails';
import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  state = {
    selected: null
  };

  showBook = id => {
    this.setState({
      selected: id
    });
  };

  showBooks = () => {
    const { loading, books } = this.props.data;

    if (loading) {
      return <div>Loading...</div>;
    }

    return books.map(book => {
      return (
        <li onClick={e => this.showBook(book.id)} key={book.id}>
          {book.name}
        </li>
      );
    });
  };

  render() {
    return (
      <div>
        <ul id="book-list">{this.showBooks()}</ul>
        {this.state.selected ? (
          <BookDetails bookId={this.state.selected} />
        ) : null}
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
