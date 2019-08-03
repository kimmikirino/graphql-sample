const { gql } = require('apollo-server-express')
module.exports = gql`
  type User {
    id: Int
    name: String
    lastName: String
  }
`
