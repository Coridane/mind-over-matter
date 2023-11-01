import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation login ($userName: String, $password: String) {
      login (userName: $userName, password: $password) {
          token
          user {
              userName password
          }
      }
    }
`;

export const ADD_USER= gql`
  mutation createUser ($userName: String, $password: String) {
    createUser (userName: $userName, password: $password) {
        token
        user {
            userName password highScore
        }
    }
  }
`;