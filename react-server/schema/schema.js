const graphQl = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphQl

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    users: {
      type: GraphQLString,
      resolve(parent, args){
        return 'Hello'
      }
    },
  }
})

module.exports = new graphQl.GraphQLSchema({
  query: RootQuery
})