const { gql } = require('apollo-server-express')
module.exports = gql`
  type Mutation {
    "Create user method"
    createUser (
      "User name"
      name: String!
      "User lastname"
      lastName: String
    ): User
  }
`
