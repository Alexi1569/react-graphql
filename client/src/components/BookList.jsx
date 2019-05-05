import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';

class BookList extends Component {
  showBooks() {
    const { loading, books } = this.props.data;

    if (loading) {
      return <div>Loading...</div>;
    }

    return books.map(book => {
      return <li key={book.id}>{book.name}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul id="book-list">{this.showBooks()}</ul>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
