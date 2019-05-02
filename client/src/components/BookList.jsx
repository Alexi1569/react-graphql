import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

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
