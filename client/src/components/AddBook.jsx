import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import { getAuthorsQuery, addBookMutation } from '../queries/queries';

class AddBook extends Component {
  state = {
    name: '',
    genre: '',
    author: ''
  };

  showAuthors() {
    const { loading, authors } = this.props.authorsQuery;

    if (loading) {
      return <option disabled>Loading...</option>;
    }

    return authors.map(author => {
      return (
        <option key={author.id} value={author.id}>
          {author.name}
        </option>
      );
    });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addBook();
  };

  render() {
    return (
      <form id="add-book" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Book name:</label>
          <input
            placeholder="Name"
            onChange={this.handleInputChange}
            value={this.state.name}
            name="name"
            type="text"
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            placeholder="Genre"
            onChange={this.handleInputChange}
            value={this.state.genre}
            name="genre"
            type="text"
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select
            name="author"
            value={this.state.author}
            onChange={this.handleInputChange}
          >
            <option>Select author</option>
            {this.showAuthors()}
          </select>
        </div>
        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: 'authorsQuery' }),
  graphql(addBookMutation, { name: 'addBook' })
)(AddBook);
