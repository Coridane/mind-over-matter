const { gql } = require('apollo-server-express');
// updateScore() needs to be built

const typeDefs = gql`
    type User {
        _id: ID
        userName: String
        password: String
        highScore: Int
    }
    type highScore {
        _id: ID
    }
    type Authentication {
        token: ID
        user: User
    }
    type Query {
        me: User
    }
    type Mutation {
        createUser(userName: String, password: String): Authentication
        login(userName: String, password:String): Authentication
        
    }
`;

module.exports = typeDefs;