const express = require('express');
const { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const schema = require('./schema/schema');
const sequelize = require('./database/database');

sequelize.sync().then(() => console.log('db is ready'))

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));
app.listen(process.env.PORT || 4000, () => console.log('Browse to localhost:4000/graphql'));