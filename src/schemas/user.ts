import { gql } from "graphql-tag";

export const userTypeDefs = gql`
  type User {
    id: ID!
    email: String!
    username: String!
    age: Int
  }

  input GetUserInput {
    userId: ID!
  }

#   input CreateUserInput {
#     email: String!
#     username: String!
#     age: Int
#   }

  type Query {
    getUser(input: GetUserInput!): User!
    getUsers: [User!]!
  }

  type Mutation {
    # createUser(input: CreateUserInput!): User!
    updateUser(id: ID!, username: String, age: Int): User!
  }


`;
