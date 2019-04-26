const graphql = require('graphql');
const _ = require('lodash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID } = graphql;

const books = [
  {
    id: '1',
    name: 'Book 1',
    genre: 'Fantazy'
  },
  {
    id: '2',
    name: 'Book 2',
    genre: 'Comedy'
  },
  {
    id: '3',
    name: 'Book 3',
    genre: 'Triller'
  }
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        console.log(typeof args.id);
        return _.find(books, { id: args.id });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
