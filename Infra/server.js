const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { typeDefs, resolvers } = require('./api/graphQL/definitions')
const app = express()

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true
})

server.applyMiddleware({ app, path: '/data' })

app.listen({ port: '4002' },  _ => console.log(`API running on port 4002 with GraphQL path ${server.graphqlPath}...`))
