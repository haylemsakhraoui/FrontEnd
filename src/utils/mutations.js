import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const Add_USER = gql`
  mutation signUp(
    $fullName: String!
    $email: String!
    $phone:String!
    $password: String!
  ) {
    signUp(
      fullName: $firstName
      email: $email
      phone:$phone
      password: $password) {
      token
      user {
        _id
      }
    }
  }
`;
