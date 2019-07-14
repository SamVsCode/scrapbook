const { gql } = require("apollo-server-express");

module.exports = gql`
  type User {
    _id: ID!
    name: String!
    phone: String!
    password: String!
  }
  type Query {
    users: [User]
    user(id: ID!): User
  }
`;
