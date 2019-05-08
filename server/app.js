const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

const DATABASE = `mongodb://admin:admin123@ds039281.mlab.com:39281/react-graphql`;

mongoose.connect(DATABASE);
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

app.use(cors());
app.use(express.static('client/build'));

app.use(
  '/api',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

if (process.env.NODE_ENV === 'production') {
  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
