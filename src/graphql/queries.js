/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAccount = /* GraphQL */ `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      accountCurrency
      id
      name
      startingBalance
      currentBalance
      leverage
      description
      createdAt
      updatedAt
    }
  }
`;

export const listAccounts = /* GraphQL */ `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        accountCurrency
        id
        name
        startingBalance
        currentBalance
        leverage
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
