const { gql } = require('apollo-server-express')
module.exports = gql`
  type Query {
    "Get user method"
    user (
      "User id"
      id: Int
    ): [User]
  }
`
