import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:4000/api'
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Reading List</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}
