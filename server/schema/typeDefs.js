const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        firstName: String!
        lastName: String!
        highScore: Int! ref: 'bestScore'
    }
    type highScore {
        _id: ID!
    }
    type Mutation {
        updateScore()
        createUser()
    }
`;

module.exports = typeDefs;